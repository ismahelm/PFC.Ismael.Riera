import express from "express";
import authenticateToken from "../middlewares/authMiddleware.js";
import { CourseInfoId, CourseInfoName, seeMyProfile, updateProfile, seeProgress, checkMyCertificates, completeProgress,
    getTest, testCorrection
 } from "../controllers/userController.js";

const userRouter = express.Router()
userRouter.get("/seeProfile", authenticateToken, seeMyProfile );
userRouter.put("/updateProfile", updateProfile);
userRouter.post("/seeCourseName", CourseInfoName );
userRouter.post("/seeCourseId",  CourseInfoId);
userRouter.post("/myProgress",  seeProgress);
userRouter.post("/myCertificates",  checkMyCertificates);
userRouter.post("/completeCourse",  completeProgress);
userRouter.post("/correctTest",  testCorrection);

userRouter.post("/getTest",  getTest);

export default userRouter;