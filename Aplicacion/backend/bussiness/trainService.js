import db from "../models/index.js";
import bcrypt from "bcrypt";
import { uploadPdfToDrive } from "./googleDriveService.js";
import fs from "fs";

// 🧪 Resultados
export const watchResults = async ({ userId, courseId }) => {
  try {
    return await db.TestResult.findAll({
      where: { user_id: userId, course_id: courseId },
    });
  } catch (error) {
    console.error("Error getting test results:", error);
    throw new Error("No se pudieron obtener los resultados.");
  }
};

export const getAllResultsByCourse = async (courseId) => {
  try {
    return await db.TestResult.findAll({
      where: { course_id: courseId },
      include: [{ model: db.User, attributes: ["username", "email"] }],
    });
  } catch (error) {
    console.error("Error fetching course results:", error);
    throw new Error("No se pudieron obtener los resultados del curso.");
  }
};

// 👥 Usuarios
export const userList = async () => {
  try {
    console.log( db.User.findAll())
    return await db.User.findAll();
  } catch (error) {
    console.error("Error listing users:", error);
    throw new Error("No se pudo obtener la lista de usuarios.");
  }
};

export const userId = async (userName) => {
  try {
    const user = await db.User.findOne({ where: { username: userName } });
    return user?.id;
  } catch (error) {
    console.error("Error fetching user ID:", error);
    throw new Error("No se pudo obtener el ID del usuario.");
  }
};

export const getProgressByUser = async () => {
  try {
    const progressList = await db.Progress.findAll({
      include: [
        {
          model: db.User,
          attributes: ["username", "position", "id", "created_at"],
        },
        { model: db.Course, attributes: ["title"] },
      ],
      raw: true,
      nest: true,
    });

    const grouped = {};

    progressList.forEach((item) => {
      const userId = item.User.id;
      if (!grouped[userId]) {
        grouped[userId] = {
          username: item.User.username,
          position: item.User.position,
          createdAt: item.User.created_at,
          id: item.User.id,
          progress: [],
        };
      }
      grouped[userId].progress.push({
        courseTitle: item.Course.title,
        completed_at: item.completed_at,
        validity: item.validity,
        status: item.status,
        assigned_at: item.assigned_at,
      });
    });

    return Object.values(grouped);
  } catch (error) {
    console.error("Error fetching user progress:", error);
    throw new Error("No se pudo obtener el progreso de los usuarios.");
  }
};

export const assignCourse = async ({ userId, courseId }) => {
  try {
    const courseIsAssigned = await db.Progress.findOne({
      where: { user_id: userId, course_id: courseId },
    });
    if (courseIsAssigned) {
      throw new Error("El curso ya está asignado.");
    }

    const today = new Date();

    return await db.Progress.create({
      user_id: userId,
      course_id: courseId,
      completed_at: null,
      assigned_at: today,
      status: false,
      validity: null,
    });
  } catch (error) {
    throw new Error(error.message || "No se pudo asignar el curso.");
  }
};

export const deleteUser = async ({ userName }) => {
  try {
    const user = await db.User.findOne({ where: { username: userName } });
    await user.destroy();
    return { message: "Usuario eliminado correctamente." };
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("No se pudo eliminar el usuario.");
  }
};

export const deleteCourse = async ({ courseName }) => {
  try {
    const course = await db.Course.findOne({ where: { title: courseName } });
    await course.destroy();
    return { message: "Curso eliminado correctamente." };
  } catch (error) {
    console.error("Error deleting course:", error);
    throw new Error("No se pudo eliminar el curso.");
  }
};

export const createCourse = async ({
  title,
  description,
  certificate_validity,
  score_required,
  file_path,
  optional,
  originalFileName,
}) => {
  try {
    const courseExists = await db.Course.findOne({ where: { title } });
    if (courseExists) {
      throw new Error("El curso ya existe.");
    }

    const uploadedFile = await uploadPdfToDrive(file_path, originalFileName);

    const newCourse = await db.Course.create({
      title,
      description,
      certificate_validity,   score_required: score_required,
      file_path: uploadedFile.id,
      optional,
   
    });

    fs.unlinkSync(file_path); // Limpia archivo temporal

    return newCourse;
  } catch (error) {
    console.error("Error creating course:", error);
    throw new Error("No se pudo crear el curso.");
  }
};

export const createUser = async ({
  userName,
  fullname,
  email,
  password,
  position,
  role,
  profileImageDriveId,
  profileImageLink
}) => {
  try {
    console.log(profileImageLink)
    const userExists = await db.User.findOne({ where: { username: userName } });
    if (userExists) {
      throw new Error("El usuario ya existe.");
    }

    const emailExists = await db.User.findOne({ where: { email } });
    if (emailExists) {
      throw new Error("El correo ya está en uso.");
    }

    if (!["user", "trainer"].includes(role)) {
      throw new Error("Rol inválido.");
    }

    const codedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.User.create({
      username: userName,
      fullname: fullname,
      email,
      password: codedPassword,
      position,
      role,
      imageId: profileImageDriveId,
    });

    return {
      id: newUser.id,
      fullname: newUser.fullname,
      username: newUser.username,
      email: newUser.email,
      position: newUser.position,
      role: newUser.role,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error(error.message || "No se pudo crear el usuario.");
  }
};
