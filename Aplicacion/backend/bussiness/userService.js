import jwt from "jsonwebtoken";
import db from "../models/index.js"; // Importar db desde index.js
//import bcrypt from "bcrypt";

export const seeProfile = async ({ id }) => {
  try {
    console.log({ id });
    const user = await db.User.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }
    return {
      id: user.id,
      email: user.email,
      username: user.username,
    };
  } catch (error) {
    throw new Error("error en seemyprofile" + error);
  }
};
export const seeMyProgress = async ({ userId }) => {
  const progressList = await db.Progress.findAll({
    where: { user_id: userId },
  });
  return progressList;
};
export const checkValidity = async ({ userId }) => {
  const certificateList = await db.Certificate.findAll({
    where: { user_id: userId },
  });
  return certificateList;
};
export const seeCourseById = async (courseId) => {
  try {
    const courseInfo = await db.Course.findByPk(courseId);

    return courseInfo.dataValues;
  } catch (error) {
    throw new Error(error);
  }
};
export const seeCourseByName = async (name) => {
  try {
    console.log(name);
    const courseInfo = await db.Course.findOne({ where: { title: name } });
    console.log(courseInfo);
    return courseInfo;
  } catch (error) {
    throw new Error(error);
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
      throw new Error("La direccion de mail ya esta en uso");
    }

    const usedName = await db.Users.findOne({
      where: { username: newUserName },
    });
    if (usedName) {
      throw new Error("name already in use");
    }

    const user = await db.Users.findByPk(userId);
    if (!user) {
      throw new Error("user not found");
    }

    //const codedPassword = await bcrypt.hash(newPassword, 10)
    user.email = newEmail;
    user.username = newUserName;
    user.password = newPassword; //codedPassword;
    await user.save();
    return {
      id: user.id,
      email: user.email,
      username: user.username,
    };
  } catch (error) {
    throw new Error("error en updatemyprofile" + error);
  }
};
