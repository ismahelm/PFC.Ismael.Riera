import express from "express";
import { getUsersList, newUser, newProgress, createACourse, resultList, watchAssignments, deleteAUser, deleteACourse } from "../controllers/trainController.js";



const trainRouter = express.Router();
trainRouter.get("/list", getUsersList)
trainRouter.post("/signin", newUser)
trainRouter.post("/assignCourse", newProgress)
trainRouter.post("/createCourse", createACourse)
trainRouter.post("/deleteUser", deleteAUser)
trainRouter.post("/deleteCourse", deleteACourse)

trainRouter.post("/watchTestResults", resultList)
trainRouter.post("/watchAssignments", watchAssignments)


export default trainRouter;
