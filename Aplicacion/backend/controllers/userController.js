import {
  seeProfile,
  updateMyProfile,
  seeCourseById,
  seeCourseByName,
  seeMyProgress,
  checkValidity,
} from "../bussiness/userService.js";

export const seeMyProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const profile = await seeProfile(userId);
    return res.status(200).json({
      profile,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const CourseInfoId = async (req, res) => {
  try {
    const courseInfo = await seeCourseById(req.body.courseId);
    res.status(200).json({ courseInfo: courseInfo });
  } catch {
    res.status(500).json({ message: error.message });
  }
};
export const CourseInfoName = async (req, res) => {
  try {
    const courseInfo = await seeCourseByName(req.body.courseName);
    res.status(200).json({ courseInfo: courseInfo });
  } catch {
    res.status(500).json({ message: error.message });
  }
};
export const checkMyCertificates = async (req, res) => {
  try {
    const todo = await checkValidity(req.body);
    return res.status(200).json({ todo });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const updatedProfile = await updateMyProfile({
      userId,
      ...req.body,
    });
    return res.status(200).json({ updatedProfile });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const seeProgress = async (req, res) => {
  try {
    const progressList = await seeMyProgress(req.body);
    return res.status(200).json({ message: "success", progressList });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
