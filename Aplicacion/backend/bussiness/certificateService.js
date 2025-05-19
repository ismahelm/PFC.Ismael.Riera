import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import db from "../models/index.js"; // Importar db desde index.js

export const downloadCertificate = async ({ userId, courseId }) => {
  try {
    const certificate = await db.Certificate.findOne({
      where: { user_id: userId, course_id: courseId },
    });
    if (!certificate)
    {
      throw new Error("Certificate not found");

    }
    return certificate.file_path;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const generateCertificate = async (user, course) => {
  const doc = new PDFDocument({ size: "A4", layout: "landscape" });

  const certDir = path.resolve("certificados");
  if (!fs.existsSync(certDir)) fs.mkdirSync(certDir);

  const filename = `certificado_${user.fullname}_${course.title}.pdf`;
  const filePath = path.join(certDir, filename);

  const writeStream = fs.createWriteStream(filePath);
  doc.pipe(writeStream);

  doc.fontSize(26).text("CERTIFICADO DE FINALIZACIÓN", { align: "center" });
  doc.moveDown();
  doc.fontSize(20).text(`Otorgado a: ${user.fullname}`, { align: "center" });
  doc.moveDown();
  doc.text(`Por completar el curso: ${course.title}`, { align: "center" });
  doc.moveDown();
  doc.text(`Fecha: ${new Date().toLocaleDateString()}`, { align: "center" });

  doc.end();

  return new Promise((resolve, reject) => {
    writeStream.on("finish", () => resolve(filePath));
    writeStream.on("error", reject);
  }); 
};
