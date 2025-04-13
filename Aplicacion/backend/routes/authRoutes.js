import express from "express";
import { login, seeProfile, createUser, test } from "../controllers/authController.js";
import authenticateToken from "../middlewares/authMiddleware.js";



const authRouter = express.Router();
authRouter.get("/test", test)
authRouter.post("/login", login)
authRouter.get("/me", authenticateToken, seeProfile)
authRouter.post("/create", createUser)
export default authRouter;
