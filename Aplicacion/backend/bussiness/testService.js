import db from "../models/index.js"; // Importar db desde index.js
import { completeCourse } from "./courseService.js";

// Agregar un nuevo test
export const addtest = async (data) => {
  try {
    const newTest = await db.Test.create({
      course_id: Number(data.test_id),
      question_text: data.question,
      options: data.options,
      correct_answer: data.correct_answer,
    });
    return newTest;
  } catch (error) {
    console.error("Error agregando test:", error);
    throw new Error("Error agregando test: " + error.message);
  }
};

// Corregir el test y calcular el puntaje
export const correctTest = async ({ userId, courseId, answers }) => {
  try {
    const questions = await db.Test.findAll({
      where: { course_id: courseId },
    });

    if (!questions || questions.length === 0) {
      throw new Error("No se encontraron preguntas para este curso.");
    }

    const courseTaken = await db.Course.findByPk(courseId);
    if (!courseTaken) {
      throw new Error("Curso no encontrado.");
    }

    const score_required = courseTaken.score_required;
    let correctCount = 0;

    questions.forEach((question) => {
      const userAnswer = answers[question.id];
      if (userAnswer && userAnswer === question.correct_answer) {
        correctCount++;
      }
    });

    const total = questions.length;
    const score = Math.round((correctCount / total) * 100);
    const passed = score >= score_required;

    // Guardar el resultado del test
    const testResult = await db.TestResult.create({
      user_id: userId,
      course_id: courseId,
      score: score,
      passed: passed,
      completed_at: new Date(),
    });

    // Si pasa el test, completar el curso
    if (passed) {
      await completeCourse({ userId, courseId });
    }

    return {
      score,
      correctAnswers: correctCount,
      totalQuestions: total,
      passed,
    };
  } catch (error) {
    console.error("Error corrigiendo test:", error);
    throw new Error("Error corrigiendo test: " + error.message);
  }
};

// Obtener el test para un curso específico
export const getTestByCourse = async ({ courseId }) => {
  try {
    const questions = await db.Test.findAll({
      where: { course_id: courseId },
      attributes: ["id", "question_text", "options"],
    });

    if (!questions || questions.length === 0) {
      throw new Error("No se encontraron preguntas para este curso.");
    }

    // Mezclar las preguntas y seleccionar 10 aleatoriamente
    const shuffled = questions.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);

    return selected;
  } catch (error) {
    console.error("Error obteniendo el test:", error);
    throw new Error("Error obteniendo el test: " + error.message);
  }
};

// Ver los resultados del test de un usuario para un curso
export const watchResults = async ({ userId, courseId }) => {
  try {
    const results = await db.TestResult.findAll({
      where: { user_id: userId, course_id: courseId },
    });
    return results;
  } catch (error) {
    console.error("Error obteniendo resultados del test:", error);
    throw new Error("Error obteniendo resultados del test: " + error.message);
  }
};
