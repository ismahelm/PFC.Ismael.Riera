import { loginMe } from "../bussiness/authService.js";
import { seeProfile } from "../bussiness/userService.js"; // Asegúrate de importar la función seeProfile

export const login = async (req, res) => {
  try {
    // Validar los datos de entrada
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const { token, role } = await loginMe(req.body);

    return res.status(200).json({
      message: `Login successful for ${username} with role ${role}`,
      token,
    });
  } catch (error) {
    // Mejor manejo de errores específicos
    if (error.message === "user not found") {
      return res.status(404).json({ message: "User not found" });
    }
    if (error.message === "Wrong password") {
      return res.status(401).json({ message: "Incorrect password" });
    }
    res.status(500).json({ message: "An error occurred during login: " + error.message });
  }
};

export const seeMyProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(400).json({ message: "User ID is missing" });
    }

    const profile = await seeProfile({ id: userId });

    return res.status(200).json({
      profile,
    });
  } catch (error) {
    // Mejor manejo de errores en el perfil
    if (error.message === "User not found") {
      return res.status(404).json({ message: "User profile not found" });
    }
    res.status(500).json({ message: "An error occurred while fetching profile: " + error.message });
  }
};
