import { downloadCertificate } from "../bussiness/certificateService.js";

export const getCertificate = async (req, res) => {
  try {
    // Validar los parámetros necesarios en el cuerpo de la solicitud
    const { userId, courseId } = req.body;
    
    if (!userId || !courseId) {
      return res.status(400).json({ message: "User ID and Course ID are required" });
    }

    // Llamada a la función para descargar el certificado
    const downloadRoute = await downloadCertificate({ userId, courseId });

    // Si la descarga fue exitosa, devolvemos la URL con el ID del archivo en Google Drive
    return res.status(200).json({
      route: `https://drive.google.com/uc?export=download&id=${downloadRoute}`
    });
  } catch (error) {
    if (error.message === "Certificate not found") {
      return res.status(400).json({ message: "Certificate not found" });
    }
  }
};
