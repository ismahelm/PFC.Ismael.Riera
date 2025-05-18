import express from "express";
import { getTest, testCorrection } from "../controllers/testController.js";
import authenticateToken from "../middlewares/authMiddleware.js";


const testRouter = express.Router();

testRouter.post("/getTest", authenticateToken,  getTest);
testRouter.post("/correctTest", authenticateToken, testCorrection);


export default testRouter
