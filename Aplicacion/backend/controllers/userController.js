import {
  seeProfile,
  updateMyProfile,
  seeCourseById,
  seeCourseByName,
  seeMyProgress,
  seeCertificates,
  completeCourse,
  getTestByCourse,
  correctTest,
  seeCourseFile
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
export const testCorrection = async(req,res) =>{
  try {
    const testcorrection = await correctTest(req.body)
    return res.status(200).json({
      testcorrection,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });

  }
}
export const getTest = async(req,res) =>{
  try {
    const testQuestions = await getTestByCourse(req.body);
    res.status(200).json({ courseInfo: testQuestions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const courseFile = async (req, res) => {
  try {
    const courseInfo = await seeCourseFile(req.body.courseId);
    console.log(courseInfo)
    res.status(200).json({ courseFile:  "https://drive.google.com/file/d/"+courseInfo+"/preview"
    });
  } catch (error){
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


export const completeProgress = async (req, res) => {
  try {
    const completedProgress = await completeCourse(req.body);
    res.status(200).json({  message: "success", completedProgress});
  } catch (error){
    res.status(500).json({ message: error.message+req.body });
  }
};
export const checkMyCertificates = async (req, res) => {
  try {
    const todo = await seeCertificates(req.body);
    return res.status(200).json({ todo });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateProfile = async (req, res) => {
  try {
    const updatedProfile = await updateMyProfile(
req.body
    );
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
