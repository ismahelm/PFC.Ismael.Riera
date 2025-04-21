import { DATE, where } from "sequelize";
import db from "../models/index.js";
import bcrypt from "bcrypt";

export const watchResults = async ({ userId, courseId }) => {
  const results = await db.TestResult.findAll({
    where: { user_id: userId, course_id: courseId },
  });
  return results;
};

export const getAllResultsByCourse = async (courseId) => {
  return await db.TestResult.findAll({
    where: { course_id: courseId },
    include: [{ model: db.User, attributes: ['username', 'email'] }]
  });
};


export const assignmentList = async ({ userId }) => {
  const results = await db.Progress.findAll({ where: { user_id: userId } });
  return results;
};
export const userList = async () => {
  const userList = await db.User.findAll();
  return userList;
};
export const userId = async (userName) => {
  const user = await db.User.findOne({where: {username: userName}});
  return user.id;
};
export const getAllProgress = async () => {
  return await db.Progress.findAll({
    include: [
      { model: db.User, attributes: ["username", "email"] },
      { model: db.Course, attributes: ["title"] }
    ]
  });
};

export const assignCourse = async ({ userId, courseId }) => {
  console.log(userId,courseId)
  const courseIsAssigned = await db.Progress.findOne({where: {user_id: userId, course_id: courseId}})
  if (courseIsAssigned)
  {
    throw new Error("course is already assigned")
  }
  const today = new Date(); // Fecha de obtención

  const newProgress = await db.Progress.create({
    user_id: userId,
    course_id: courseId,
    completed_at: null,
    assigned_at: today,
    status: false,
    validity: null
  });
  return newProgress;
};

export const deleteUser = async ({userName}) =>
{
try {
   const user = await db.User.findOne({where: {username: userName}})
  await user.destroy(); // Borrado real
  return { message: "User deleted successfully" };}
 catch (error) {
  throw new Error(error)
}}

export const deleteCourse = async ({courseName}) =>
  {
  try {
     const course = await db.Course.findOne({where: {title: courseName}})
    await course.destroy(); // Borrado real
    return { message: "course deleted successfully" };}
   catch (error) {
    throw new Error(error)
  }}
 

export const createCourse = async ({
  title,
  description,
  certificate_validity,
  file_path,
  optional,
}) => {
  const courseExists = await db.Course.findOne({where: {title: title}})
  if (courseExists)
  {
    throw new Error ("Course already exists")
  }
  const newCourse = await db.Course.create({
    title: title,
    description: description,
    certificate_validity: certificate_validity,
    file_path: file_path,
    optional: optional,
  });
  return newCourse;
};

export const createUser = async ({
  userName,
  email,
  password,
  position,
  role,
}) => {
  console.log( userName,
    email,
    password,
    position,
    role,)
  const userExists = await db.User.findOne({ where: { username: userName } });
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
  
    const codedPassword = await bcrypt.hash(password, 10);
    console.log(codedPassword)
  const newUser = await db.User.create({
    username: userName,
    email,
    password: codedPassword,
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
