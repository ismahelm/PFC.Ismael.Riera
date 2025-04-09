import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token)
    {
        return res.status(401).json({message: "No token provided"})
    }
const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;
        next();
    }
export default authenticateToken;