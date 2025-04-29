import express from "express";
import authenticateToken from "../middlewares/authMiddleware.js";
import { CourseInfoName, seeMyProfile, updateProfile, seeProgress, checkMyCertificates, completeProgress,
    getTest, testCorrection,
    courseFile
 } from "../controllers/userController.js";
 import { uploadPDF } from "../controllers/googleDriveController.js";

const userRouter = express.Router()
userRouter.get("/seeProfile", seeMyProfile );
userRouter.put("/updateProfile", updateProfile);
userRouter.post("/seeCourseName", CourseInfoName );
userRouter.post("/seeCourseId",  courseFile);
userRouter.post("/myProgress",  seeProgress);
userRouter.post("/myCertificates",  checkMyCertificates);
userRouter.post("/completeCourse",  completeProgress);
userRouter.post("/correctTest",  testCorrection);
userRouter.post("/upload",  uploadPDF);


userRouter.post("/getTest",  getTest);

export default userRouter;