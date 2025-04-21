import express from "express";
import { getUsersList, newUser, newProgress, createACourse, resultList, watchAssignments, deleteAUser, deleteACourse, getUserId } from "../controllers/trainController.js";



const trainRouter = express.Router();
trainRouter.get("/list", getUsersList)
trainRouter.post("/signin", newUser)
trainRouter.post("/assignCourse", newProgress)
trainRouter.post("/createCourse", createACourse)
trainRouter.post("/deleteUser", deleteAUser)
trainRouter.post("/deleteCourse", deleteACourse)

trainRouter.post("/watchTestResults", resultList)
trainRouter.post("/watchAssignments", watchAssignments)
trainRouter.post("/getId", getUserId)


export default trainRouter;
