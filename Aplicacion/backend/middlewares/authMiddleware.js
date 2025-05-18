import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const requireTrainerRole = (req, res, next) => {
    if (req.user?.role !== "trainer") {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

export default authenticateToken;
