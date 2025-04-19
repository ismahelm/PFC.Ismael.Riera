import jwt from "jsonwebtoken";
import db from "../models/index.js"; // Importar db desde index.js
import bcrypt from "bcrypt";

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


  try {
      const today = new Date();

  // Actualizamos progresos caducados
  const progressList = await db.Progress.findAll({
    where: { user_id: userId },
    include: [{ model: db.Course, attributes: ["title"] }]
  });

  for (let progress of progressList) {
    if (progress.validity && new Date(progress.validity) < today && progress.status) {
      await progress.update({ status: false });
    }
  }
  return {
    progressList
  };
  } catch (error) {
    throw new Error(error);
    
  }
};

export const seeCertificates = async ({ userId }) => {
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

    const usedName = await db.User.findOne({
      where: { username: newUserName },
    });
    if (usedName) {
      throw new Error("name already in use");
    }

    const user = await db.User.findByPk(userId);
    if (!user) {
      throw new Error("user not found");
    }

    const codedPassword = await bcrypt.hash(newPassword, 10)
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
    throw new Error("error en updatemyprofile" + error);
  }
};
export const getCourseFile = async (courseId) => {
  const course = await db.Course.findByPk(courseId);
  if (!course || !course.file_path) {
    throw new Error("File not found");
  }
  return course.file_path; // O redireccionas al enlace directamente
};

export const completeCourse = async ({userId, courseId})=> {
 
  try {
    const today = new Date()
  const completedCourse = await db.Course.findByPk(courseId)

  const completedProgress = await db.Progress.findOne({where: {user_id: userId, course_id: courseId}})
  const validityDate = new Date(today);
  validityDate.setDate(today.getDate() + completedCourse.certificate_validity);
  await completedProgress.update({
    completed_at: today,
    validity: validityDate,
    status: true
  });  

  const newCertificate = await db.Certificate.create({
    user_id: userId,
    course_id: courseId,
    obtained_at: today,
    file_path: "ruta al archivo",
    validity: validityDate
  });
  return {completedProgress, newCertificate}

} catch (error) {
    throw new Error(error);

  }
}
export const correctTest = async ({ userId, courseId, answers }) => {
  try {
    // 1. Obtener todas las preguntas del curso
    const questions = await db.Test.findAll({
      where: { course_id: courseId },
    });
    const courseTaken = await db.Course.findByPk(courseId);
    const score_required = courseTaken.score_required
    // 2. Comparar las respuestas
    let correctCount = 0;
    questions.forEach((question) => {
      const userAnswer = answers[question.id]; // answers debe ser tipo { [questionId]: 'a' }
      if (userAnswer && userAnswer === question.correct_answer) {
        correctCount++;
      }
    });

    const total = questions.length;
    const score = Math.round((correctCount / total) * 100); // por ejemplo, porcentaje
    const passed =  score>=score_required
    const testResult = await db.TestResult.create({
      user_id: userId,
      course_id: courseId,
      score: score,
      passed: passed,
      completed_at: new Date(),
    });
if (passed)
{
  completeCourse({userId,courseId})
}
    return {
      score,
      correctAnswers: correctCount,
      totalQuestions: total,
      passed: passed, // puedes ajustar el umbral
    };
  } catch (error) {
    throw new Error("Error corrigiendo test: " + error.message);
  }
};

export const getTestByCourse = async ({courseId}) => {
  try {
    const questions = await db.Test.findAll({
      where: { course_id: courseId },
      attributes: ['id', 'question_text', 'options'], // no devolvemos correct_answer
    });

    if (!questions || questions.length === 0) {
      throw new Error("No test found for this course");
    }

    return questions;
  } catch (error) {
    throw new Error("Error fetching test: " + error.message);
  }
};
