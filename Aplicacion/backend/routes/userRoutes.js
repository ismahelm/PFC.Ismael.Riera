import express from "express";
import authenticateToken from "../middlewares/authMiddleware.js";
import {  seeMyProfile, updateProfile, seeProgress
   
 } from "../controllers/userController.js";

const userRouter = express.Router()
userRouter.post("/seeProfile", authenticateToken, seeMyProfile );
userRouter.put("/updateProfile", authenticateToken, updateProfile);

userRouter.post("/myProgress", authenticateToken,  seeProgress);

export default userRouter;