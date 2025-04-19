import {
  userList,
  createUser,
  assignCourse,
  createCourse,
  watchResults,
  assignmentList,
  deleteUser, deleteCourse
} from "../bussiness/trainService.js";

export const resultList = async (req, res) => {
  try {
    const list = await watchResults(req.body);
    res.status(200).json({ message: "succes", list });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteAUser = async (req,res) =>{
  try {
    const deletedUser = await deleteUser(req.body)
    res.status(200).json({ message: "succes"});

  } catch (error) {
    res.status(500).json({ message: error.message });

  }
}

export const deleteACourse = async (req,res) =>{
  try {
    const deletedCourser = await deleteCourse(req.body)
    res.status(200).json({ message: "succes"});

  } catch (error) {
    res.status(500).json({ message: error.message });

  }
}
export const watchAssignments = async (req, res) => {
  try {
    const list = await assignmentList(req.body);
    res.status(200).json({ message: "succes", list });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getUsersList = async (req, res) => {
  try {
    const list = await userList();
    res.status(200).json({ message: "succes", list });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createACourse = async (req, res) => {
  try {
    console.log(req.body);
    const newCourse = await createCourse(req.body);
    res.status(200).json({ message: "succes", newCourse });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const newProgress = async (req, res) => {
  try {
    const newAssignment = await assignCourse(req.body);
    res.status(200).json({ message: "succes", newAssignment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const newUser = async (req, res) => {
  try {
    const created = await createUser(req.body);
    res.status(200).json({ message: "success", created });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
