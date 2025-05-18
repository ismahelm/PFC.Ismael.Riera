import { seeCourses, seeCourseFile, seeCourseByName, completeCourse } from "../bussiness/courseService.js";

export const courseFile = async (req, res) => {
  try {
    const { courseId } = req.body;

    // Validación de parámetros
    if (!courseId) {
      return res.status(400).json({ message: "Course ID is required" });
    }

    const courseInfo = await seeCourseFile(courseId);
    
    if (!courseInfo) {
      return res.status(404).json({ message: "Course file not found" });
    }

    return res.status(200).json({
      courseFile: `https://drive.google.com/file/d/${courseInfo}/preview`,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while fetching the course file: " + error.message,
    });
  }
};

export const CourseInfoName = async (req, res) => {
  try {
    const { courseName } = req.body;

    // Validación de parámetros
    if (!courseName) {
      return res.status(400).json({ message: "Course name is required" });
    }

    const courseInfo = await seeCourseByName(courseName);
    
    if (!courseInfo) {
      return res.status(404).json({ message: "Course not found" });
    }

    return res.status(200).json({ courseInfo });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while fetching course info: " + error.message,
    });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courseInfo = await seeCourses();
    return res.status(200).json({ courseInfo });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while fetching courses: " + error.message,
    });
  }
};
