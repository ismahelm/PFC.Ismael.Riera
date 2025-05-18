import CustomButton from "../atoms/CustomButton/CustomButton";
import useAuthStore from "../../contexts/AuthContext";
import { useState } from "react";
import CustomIconButton from "../atoms/CustomIconButton/CustomIconButton";
import { Box } from "@mui/material";
import Title from "../atoms/Title/Title";
import CourseSelector from "../molecules/CourseSelector";
import UserSelector from "../molecules/UserSelector";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const AssignmentCard = ({ handleShowAssignment }) => {
  const [selectedCourse, setSelectedCourse] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const assignACourse = useAuthStore((state) => state.assignCourse);

  const assignCourse = async () => {
    try {
      await assignACourse(selectedUser, selectedCourse);
    } catch (error) {
      console.error("Error al añadir usuario:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <CustomIconButton
        onClick={handleShowAssignment}
        icon={KeyboardArrowUpIcon}
      />
      <UserSelector onUserChange={setSelectedUser} />
      <CourseSelector onCourseChange={setSelectedCourse} />

      <CustomButton text={"assign Course"} onClick={assignCourse} />
    </Box>
  );
};
export default AssignmentCard;
