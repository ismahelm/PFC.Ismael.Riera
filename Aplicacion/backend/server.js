import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import courseRoutes from "./routes/courseRoutes.js"
import testRoutes from "./routes/testRoutes.js"
import certRoutes from "./routes/certRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import trainRoutes from "./routes/trainRoutes.js";
import db from "./models/index.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT 
const CLIENT_URL = process.env.CLIENT_URL

app.use(cors({
  origin: CLIENT_URL,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser())

function startServer(){
  
     db.sequelize.sync({alter: true})
     .then(
       ()=>{
        app.listen(PORT, () => { console.log("---------server running ------") });

       }
     )
     }

startServer();
app.use("/auth", authRoutes)
app.use ("/user", userRoutes)
app.use ("/train", trainRoutes)
app.use("/cert", certRoutes)
app.use("/test", testRoutes)
app.use("/courses", courseRoutes)


