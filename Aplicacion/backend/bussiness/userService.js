import db from "../models/index.js"; 
import bcrypt from "bcrypt"; 
export const seeProfile = async ( data ) => {
  try {
    const user = await db.User.findByPk(data);
    if (!user) {
      throw new Error("User not found");
    }
    return {
      id: user.id,
      position: user.position,
      email: user.email,
      image64: user.imageId,
      role: user.role,
      membersince: user.created_at,
      username: user.username,
      fullname: user.fullname,
    };
  } catch (error) {
    console.error("Error en seeProfile:", error);
    throw new Error("Error en seeProfile: " + error.message);
  }
};

export const seeMyProgress = async ({ userId }) => {
  try {
    const today = new Date();

    const progressList = await db.Progress.findAll({
      where: { user_id: userId },
      include: [{ model: db.Course, attributes: ["title"] }],
    });

    for (let progress of progressList) {
      if (progress.validity && new Date(progress.validity) < today && progress.status) {
        await progress.update({ status: false });
      }
    }

    return { progressList };
  } catch (error) {
    console.error("Error en seeMyProgress:", error);
    throw new Error("Error en seeMyProgress: " + error.message);
  }
};

export const updateMyProfile = async ({
  userId,
  newEmail,
  newUserName,
  newPassword,
}) => {
  try {
    const usedEmail = await db.User.findOne({ where: { email: newEmail } });
    if (usedEmail) {
      throw new Error("La dirección de correo electrónico ya está en uso");
    }

    const usedName = await db.User.findOne({ where: { username: newUserName } });
    if (usedName) {
      throw new Error("El nombre de usuario ya está en uso");
    }

    const user = await db.User.findByPk(userId);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    const codedPassword = await bcrypt.hash(newPassword, 10);

    user.email = newEmail;
    user.username = newUserName;
    user.password = codedPassword;
    await user.save();

    return {
      id: user.id,
      email: user.email,
      username: user.username,
    };
  } catch (error) {
    console.error("Error en updateMyProfile:", error);
    throw new Error("Error en updateMyProfile: " + error.message);
  }
};
