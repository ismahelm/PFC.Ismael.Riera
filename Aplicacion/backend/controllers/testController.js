import { getTestByCourse, correctTest, addtest } from "../bussiness/testService.js";

export const addATest = async (req, res) => {
  try {
    const { test_id, question, options, correct_answer } = req.body;

    // Validación de parámetros
    if (!test_id || !question || !options || !correct_answer) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const testAddition = await addtest(req.body);
    return res.status(200).json({
      success: true,
      data: testAddition,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding test: " + error.message,
    });
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
    res.status(500).json({
      success: false,
      message: "Error fetching test questions: " + error.message,
    });
  }
};
