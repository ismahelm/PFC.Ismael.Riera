import db from "../models/index.js"; // Importar db desde index.js
import { generateCertificate } from "./certificateService.js";
import { uploadPdfToDrive } from "./googleDriveService.js";

// Completar curso y generar certificado
export const completeCourse = async ({ userId, courseId }) => {
  try {
    const today = new Date();

    // Obtener curso y usuario
    const completedCourse = await db.Course.findByPk(courseId);
    if (!completedCourse) throw new Error("Curso no encontrado.");

    const user = await db.User.findByPk(userId);
    if (!user) throw new Error("Usuario no encontrado.");

    const completedProgress = await db.Progress.findOne({
      where: { user_id: userId, course_id: courseId },
    });
    if (!completedProgress) throw new Error("Progreso no encontrado.");

    const validityDate = new Date(today);
    validityDate.setDate(today.getDate() + completedCourse.certificate_validity);

    // Actualizar progreso del usuario
    await completedProgress.update({
      completed_at: today,
      validity: validityDate,
      status: true,
    });

    // Generar certificado en PDF
    const localPath = await generateCertificate(user, completedCourse);

    // Subir PDF a Google Drive
    const fileName = `Certificado_${user.username}_${completedCourse.title}.pdf`;
    const driveFile = await uploadPdfToDrive(localPath, fileName);
    const oldCertificate = await db.Certificate.findOne({
      where: { user_id: userId, course_id: courseId },
    });

    // Eliminar certificado anterior si existe
    if (oldCertificate) {
      await oldCertificate.destroy();
    }

    // Guardar nuevo certificado en la base de datos
    const newCertificate = await db.Certificate.create({
      user_id: userId,
      course_id: courseId,
      obtained_at: today,
      file_path: driveFile.id, // Puedes usar webContentLink si prefieres un enlace descargable
      validity: validityDate,
    });

    return driveFile.id;
  } catch (error) {
    console.error("Error completando curso:", error);
    throw new Error("Error completando curso: " + error.message);
  }
};

// Ver detalles del curso por nombre
export const seeCourseByName = async (name) => {
  try {
    const courseInfo = await db.Course.findOne({ where: { title: name } });
    if (!courseInfo) throw new Error("Curso no encontrado.");
    return courseInfo;
  } catch (error) {
    console.error("Error obteniendo curso por nombre:", error);
    throw new Error("Error obteniendo curso: " + error.message);
  }
};

// Ver archivo del curso por ID
export const seeCourseFile = async (courseId) => {
  try {
    const courseInfo = await db.Course.findByPk(courseId);
    if (!courseInfo) throw new Error("Curso no encontrado.");
    return courseInfo.dataValues.file_path;
  } catch (error) {
    console.error("Error obteniendo archivo del curso:", error);
    throw new Error("Error obteniendo archivo del curso: " + error.message);
  }
};

// Ver todos los cursos
export const seeCourses = async () => {
  try {
    const courses = await db.Course.findAll();
    return courses;
  } catch (error) {
    console.error("Error obteniendo todos los cursos:", error);
    throw new Error("Error obteniendo cursos: " + error.message);
  }
};
