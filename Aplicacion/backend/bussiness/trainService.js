import { DATE } from "sequelize";
import db from "../models/index.js";

export const watchResults = async ({ userId, courseId }) => {
  const results = await db.TestResult.findAll({
    where: { user_id: userId, course_id: courseId },
  });
  return results;
};

export const assignmentList = async ({ userId }) => {
  const results = await db.Progress.findAll({ where: { user_id: userId } });
  return results;
};
export const userList = async () => {
  const userlist = await db.User.findAll();
  console.log(userlist);
  return userlist;
};
export const assignCourse = async ({ userId, courseId }) => {
  console.log({ userId });
  const newProgress = await db.Progress.create({
    user_id: userId,
    course_id: courseId,
    completed_at: null,
    certificate_path: "ruta/al/certificado/obtenbido",
    status: false,
    validity: new Date(),
  });
  return newProgress;
};

export const createCourse = async ({
  title,
  description,
  certificate_validity,
  file_path,
  optional,
}) => {
  const newCourse = db.Course.create({
    title: title,
    description: description,
    certificate_validity: certificate_validity,
    file_path: file_path,
    optional: optional,
  });
  return newCourse;
};

export const createUser = async ({
  username,
  email,
  password,
  position,
  role,
}) => {
  const userExists = await db.User.findOne({ where: { username } });
  if (userExists) {
    throw new Error("user already exists");
  }
  const emailExists = await db.User.findOne({ where: { email } });
  if (emailExists) {
    throw new Error("email already in use");
  }
  if (!["user", "trainer"].includes(role)) {
    throw new Error("invalid role");
  }
  /*
    const codedPassword = await bcrypt.hash(password, 10);
    */
  const newUser = await db.User.create({
    username,
    email,
    password,
    position,
    role,
  });
  return {
    id: newUser.id,
    username: newUser.username,
    email: newUser.email,
    position: newUser.position,
    role: newUser.role,
  };
};
