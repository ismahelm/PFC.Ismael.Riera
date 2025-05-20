import express from "express";
import { getUsersList, newUser, newProgress, createACourse, resultList, watchAssignments, deleteAUser, deleteACourse, getUserId, progressList } from "../controllers/trainController.js";
import authenticateToken, {requireTrainerRole} from "../middlewares/authMiddleware.js";
import { addATest } from "../controllers/testController.js";
import multer from "multer";

const trainRouter = express.Router();
const upload = multer({ dest: 'uploads/' }); // Guarda archivos temporalmente
trainRouter.post("/createCourse",authenticateToken, requireTrainerRole, upload.single('file'),  createACourse)
trainRouter.post("/addTest",authenticateToken, requireTrainerRole, addATest)
trainRouter.post("/signin", authenticateToken, requireTrainerRole, newUser)
trainRouter.post("/assignCourse",authenticateToken, requireTrainerRole, newProgress)
trainRouter.post("/getId", getUserId)
trainRouter.get("/list",authenticateToken, requireTrainerRole, getUsersList)
trainRouter.get("/progressList", authenticateToken, progressList)



trainRouter.post("/deleteUser",authenticateToken, requireTrainerRole, deleteAUser)
trainRouter.post("/deleteCourse",authenticateToken, requireTrainerRole, deleteACourse)
trainRouter.post("/watchTestResults",authenticateToken, requireTrainerRole, resultList)


export default trainRouter;
