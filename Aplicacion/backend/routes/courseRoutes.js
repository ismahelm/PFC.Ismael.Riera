import express from "express";
import { CourseInfoName, courseFile, getCourses } from "../controllers/courseController.js";
import authenticateToken from "../middlewares/authMiddleware.js";

const courseRouter = express.Router();
courseRouter.post("/seeCourseName", authenticateToken, CourseInfoName );
courseRouter.post("/seeCourseId", authenticateToken, courseFile);
courseRouter.get("/seeCourses", authenticateToken, getCourses);

export default courseRouter