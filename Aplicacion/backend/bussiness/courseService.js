import db from "../models/index.js";
import { generateCertificate } from "./certificateService.js";
import { uploadPdfToDrive } from "./googleDriveService.js";

export const completeCourse = async ({ userId, courseId }) => {
  try {
    const today = new Date();

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

    await completedProgress.update({
      completed_at: today,
      validity: validityDate,
      status: true,
    });

    const localPath = await generateCertificate(user, completedCourse);

    const fileName = `Certificado_${user.username}_${completedCourse.title}.pdf`;
    const driveFile = await uploadPdfToDrive(localPath, fileName);
    const oldCertificate = await db.Certificate.findOne({
      where: { user_id: userId, course_id: courseId },
    });

    
    if (oldCertificate) {
      await oldCertificate.destroy();
    }

    const newCertificate = await db.Certificate.create({
      user_id: userId,
      course_id: courseId,
      obtained_at: today,
      file_path: driveFile.id,
      validity: validityDate,
    });

    return driveFile.id;
  } catch (error) {
    console.error("Error completando curso:", error);
    throw new Error("Error completando curso: " + error.message);
  }
};

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

export const seeCourses = async () => {
  try {
    const courses = await db.Course.findAll();
    return courses;
  } catch (error) {
    console.error("Error obteniendo todos los cursos:", error);
    throw new Error("Error obteniendo cursos: " + error.message);
  }
};
