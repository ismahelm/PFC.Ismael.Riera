import CustomButton from "../atoms/CustomButton/CustomButton";
import useAuthStore from "../../contexts/AuthContext";
import { useState } from "react";
import CustomIconButton from "../atoms/CustomIconButton/CustomIconButton";
import { Box } from "@mui/material";
import Title from "../atoms/Title/Title";
import CourseSelector from "../molecules/CourseSelector";
import UserSelector from "../molecules/UserSelector";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CustomCard from "../atoms/CustomCard";
import { useTranslation } from "react-i18next";

const AssignmentCard = ({
  handleShowAssignment,
  snackbarMessage,
  setSnackbarMessage,
  snackbarSeverity,
  setSnackbarSeverity,
  snackbarOpen,
  setSnackbarOpen, height
}) => {
  const [selectedCourse, setSelectedCourse] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const assignACourse = useAuthStore((state) => state.assignCourse);
    const {t}=useTranslation()

  const assignCourse = async () => {
    try {
      await assignACourse(selectedUser, selectedCourse);
      setSnackbarMessage(t("success.courseAssigned"));
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      const status = error.response.status;

      if (status === 400) {
        setSnackbarMessage(t("errors.missingFields"));
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      } else if (status === 409) {
        setSnackbarMessage(t("errors.courseAssigned"));
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      } else if (status === 500) {
        setSnackbarMessage(t("errors.internalIssues"));
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      } else {
        setSnackbarMessage(t("errors.unexpectedError"));
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }

      setSnackbarOpen(true); // abre Snackbar
    }
  };

  return (
    <CustomCard heigth={height}>
      <Box
      sx={{
        mt: 2
      }}>

      </Box>
             <CustomIconButton
        onClick={handleShowAssignment}
        icon={KeyboardArrowUpIcon}
      />
      
   <Box
      sx={{
        mt: 1
      }}>
<UserSelector
        onUserChange={setSelectedUser}
        width={"560px"}
        marginBottom={"10px"}
      />
      </Box>
        <Box
      sx={{
        mt: 1
      }}>
      <CourseSelector onCourseChange={setSelectedCourse} width={"560px"} />

      </Box>
  <Box
      sx={{
        mt: 2
      }}>
      <CustomButton text={t("assignCourse.button")} onClick={assignCourse} />

      </Box>
    </CustomCard>
  );
};
export default AssignmentCard;
