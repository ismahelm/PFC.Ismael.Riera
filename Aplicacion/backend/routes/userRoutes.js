import express from "express";
import authenticateToken from "../middlewares/authMiddleware.js";
import { CourseInfoId, CourseInfoName, seeMyProfile, updateProfile, seeProgress, checkMyCertificates } from "../controllers/userController.js";

const userRouter = express.Router()
userRouter.get("/seeProfile", authenticateToken, seeMyProfile );
userRouter.put("/updateProfile", authenticateToken, updateProfile);
userRouter.post("/seeCourseName", CourseInfoName );
userRouter.post("/seeCourseId",  CourseInfoId);
userRouter.post("/myProgress",  seeProgress);
userRouter.post("/myCertificates",  checkMyCertificates);

export default userRouter;