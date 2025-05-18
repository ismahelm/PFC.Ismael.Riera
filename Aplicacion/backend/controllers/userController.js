import {
  seeProfile,
  updateMyProfile,
  seeMyProgress,
} from "../bussiness/userService.js";

export const seeMyProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    // Validación si el userId no está presente
    if (!userId) {
      return res.status(400).json({ success: false, message: "User not authenticated" });
    }

    const profile = await seeProfile(userId);
    return res.status(200).json({
      success: true,
      profile,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error fetching profile: " + error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    // Validación de datos
    const { newEmail, newUserName, newPassword } = req.body;
    if (!newEmail || !newUserName || !newPassword) {
      return res.status(400).json({ success: false, message: "All fields (newEmail, newUserName, newPassword) are required" });
    }

    const updatedProfile = await updateMyProfile(req.body);
    return res.status(200).json({
      success: true,
      updatedProfile,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error updating profile: " + error.message });
  }
};

export const seeProgress = async (req, res) => {
  try {
    const { userId } = req.body;

    // Validación de userId
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    const progressList = await seeMyProgress(req.body);
    return res.status(200).json({ success: true, message: "Progress fetched successfully", progressList });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error fetching progress: " + error.message });
  }
};
