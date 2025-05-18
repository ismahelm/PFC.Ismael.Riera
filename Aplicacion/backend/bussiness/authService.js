import jwt from "jsonwebtoken";
import db from "../models/index.js";
import bcrypt from "bcrypt";

export const loginMe = async ({ username, password }) => {
  try {
    console.log(username)
    const user = await db.User.findOne({ where: { username } });
    if (!user) {
      throw new Error("Usuario no encontrado.");
    }
/*
    const correct = await bcrypt.compare(password, user.password);
    if (!correct) {
      throw new Error("Contraseña incorrecta.");
    }
*/
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { token, role: user.role };
  } catch (error) {
    console.error("Error en login:", error);
    throw new Error(error.message || "No se pudo iniciar sesión.");
  }
};
