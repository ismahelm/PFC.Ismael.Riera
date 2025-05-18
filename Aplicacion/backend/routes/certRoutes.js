import express from "express";
import { getCertificate } from "../controllers/certificateController.js";
import authenticateToken from "../middlewares/authMiddleware.js";

const certRouter = express.Router();


certRouter.post("/getCertificate",authenticateToken, getCertificate);

export default certRouter;
