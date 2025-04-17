import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import trainRoutes from "./routes/trainRoutes.js";
import db from "./models/index.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser())

function startServer(){
  
     db.sequelize.sync({alter: true})
     .then(
       ()=>{
        console.log("good");
        app.listen(5000, () => { console.log("server running on localhost/5000") });

       }
     )
     }

startServer();
app.use("/auth", authRoutes)
app.use ("/user", userRoutes)
app.use ("/train", trainRoutes)


