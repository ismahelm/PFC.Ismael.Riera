import express from "express";
import { login } from "../controllers/authController.js";
import authenticateToken from "../middlewares/authMiddleware.js";



const authRouter = express.Router();
authRouter.post("/login", login)
export default authRouter;
