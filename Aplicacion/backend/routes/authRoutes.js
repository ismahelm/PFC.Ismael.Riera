import express from "express";
import { login, test } from "../controllers/authController.js";
import authenticateToken from "../middlewares/authMiddleware.js";



const authRouter = express.Router();
authRouter.get("/test", test)
authRouter.post("/login", login)
export default authRouter;
