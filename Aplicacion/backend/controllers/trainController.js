import {
  userList,
  createUser,
  assignCourse,
  createCourse,
  watchResults,
  deleteUser,
  deleteCourse,
  userId,
  getProgressByUser
} from "../bussiness/trainService.js";
import { uploadImageToDrive } from "../bussiness/googleDriveService.js";
// Función común para enviar respuestas
const sendResponse = (res, status, success, message, data = null) => {
  return res.status(status).json({
    success,
    message,
    data
  });
};

export const resultList = async (req, res) => {
  try {
    const list = await watchResults(req.body);
    sendResponse(res, 200, true, "Success", list);
  } catch (error) {
    sendResponse(res, 500, false, "Error: " + error.message);
  }
};

export const progressList = async (req, res) => {
  try {
    const list = await getProgressByUser();
    sendResponse(res, 200, true, "Success", list);
  } catch (error) {
    sendResponse(res, 500, false, "Error: " + error.message);
  }
};

export const deleteAUser = async (req, res) => {
  try {
    await deleteUser(req.body);
    sendResponse(res, 200, true, "User deleted successfully");
  } catch (error) {
    sendResponse(res, 500, false, "Error: " + error.message);
  }
};

export const deleteACourse = async (req, res) => {
  try {
    await deleteCourse(req.body);
    sendResponse(res, 200, true, "Course deleted successfully");
  } catch (error) {
    sendResponse(res, 500, false, "Error: " + error.message);
  }
};

export const watchAssignments = async (req, res) => {
  try {
    const list = await assignmentList(req.body);
    sendResponse(res, 200, true, "Success", list);
  } catch (error) {
    sendResponse(res, 500, false, "Error: " + error.message);
  }
};

export const getUsersList = async (req, res) => {
  try {
    const list = await userList();
    sendResponse(res, 200, true, "Success", list);
  } catch (error) {
    sendResponse(res, 500, false, "Error: " + error.message);
  }
};

export const getUserId = async (req, res) => {
  try {
    const userid = await userId(req.body.userName);
    sendResponse(res, 200, true, "Success", { userid });
  } catch (error) {
    sendResponse(res, 500, false, "Error: " + error.message);
  }
};

export const createACourse = async (req, res) => {
  const { title, description, certificate_validity, score_required, optional } = req.body;
  if (!req.file) {
    return sendResponse(res, 400, false, "File is required for the course");
  }
  const score = Number(score_required);

  const file = req.file;
  try {
    const newCourse = await createCourse({
      title,
      description,
      certificate_validity,
      score_required,
           file_path: file.path,

      optional: optional === 'true',
      originalFileName: file.originalname,
    });

    sendResponse(res, 200, true, "Course created successfully", { newCourse });
  } catch (error) {
    sendResponse(res, 500, false, "Error: " + error.message);
  }
};

export const newProgress = async (req, res) => {
  try {
    const newAssignment = await assignCourse(req.body);
    sendResponse(res, 200, true, "Assignment created successfully", { newAssignment });
  } catch (error) {
    sendResponse(res, 500, false, "Error: " + error.message);
  }
};

export const newUser = async (req, res) => {
  try {
    if (!req.file) {
      return sendResponse(res, 400, false, "Se requiere una imagen de perfil");
    }

    const file = req.file;

    const uploadedImage = await uploadImageToDrive(file.path, file.originalname, file.mimetype);

    req.body.profileImageDriveId = uploadedImage.id;
    req.body.profileImageLink = uploadedImage.webViewLink;

    // Guardar el usuario con los datos incluyendo el ID de la imagen
    const created = await createUser(req.body);
    sendResponse(res, 200, true, "Usuario creado correctamente", { created });
  } catch (error) {
    console.log(error)
    sendResponse(res, 500, false, "Error: " + error.message);
  }
};