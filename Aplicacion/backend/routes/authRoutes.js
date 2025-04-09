import express from "express";
import { login, seeProfile, createUser } from "../controllers/authController.js";
import authenticateToken from "../middlewares/authMiddleware.js";



const authRouter = express.Router();
authRouter.post("/login", login)
authRouter.get("/me", authenticateToken, seeProfile)
authRouter.post("/create", createUser)
export default authRouter;
