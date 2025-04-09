import express from "express";
import authenticateToken from "../middlewares/authMiddleware.js";
import { seeProfile, updateProfile } from "../controllers/userController.js";

const userRouter = express.Router()
userRouter.get("/seeProfile", authenticateToken, seeProfile );
userRouter.put("/updateProfile", authenticateToken, updateProfile);
export default userRouter;