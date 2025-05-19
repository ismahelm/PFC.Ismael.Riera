import { getTestByCourse, correctTest, addtest } from "../bussiness/testService.js";

export const addATest = async (req, res) => {
  try {
    const { test_id, question, options, correct_answer } = req.body;


    const testAddition = await addtest(req.body);
    return res.status(200).json({
      success: true,
      data: testAddition,
    });
  } catch (error) {
    if (error.message === "Missing field") {
      return res.status(400).json({ message: "Missing field" });
    }
    if (error.message === "Question already exists") {
      return res.status(409).json({ message: "Question already exists" });
    }
  }
};

export const testCorrection = async (req, res) => {
  try {
    const { userId, courseId, answers } = req.body;

    // Validación de parámetros
    if (!userId || !courseId || !answers) {
      return res.status(400).json({ success: false, message: "userId, courseId, and answers are required" });
    }

    const testcorrection = await correctTest(req.body);
    return res.status(200).json({
      success: true,
      data: testcorrection,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error correcting test: " + error.message,
    });
  }
};

export const getTest = async (req, res) => {
  try {
    const { courseId } = req.body;

    // Validación de parámetros
    if (!courseId) {
      return res.status(400).json({ success: false, message: "courseId is required" });
    }

    const testQuestions = await getTestByCourse(req.body);
    return res.status(200).json({
      success: true,
      data: testQuestions,
    });
  } catch (error) {
    if (error.message === "Missing field") {
      return res.status(400).json({ message: "Missing field" });
    }
    if (error.message === "Not enough questions for this course") {
      return res.status(400).json({ message: "Not enough questions for this course" });
    }
  }
};
