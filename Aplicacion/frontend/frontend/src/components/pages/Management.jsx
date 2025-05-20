import DrawerMenu from "../organisms/TopNavBar";
import { Box } from "@mui/material";
import Title from "../atoms/Title/Title";
import AddUserCard from "../organisms/AddUserCard";
import AssignmentCard from "../organisms/AssignmentCard";
import AddCourseCard from "../organisms/AddCourseCard";
import AddTestQuestion from "../organisms/AddTestQuestion";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import CustomIconButton from "../atoms/CustomIconButton/CustomIconButton";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import QuizIcon from "@mui/icons-material/Quiz";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import FeedbackSnackbar from "../organisms/FeedbackSnackbar";
import TopNavBar from "../organisms/TopNavBar";
import { useTranslation } from "react-i18next";

export default function Management() {
    const {t} = useTranslation()
  const [showAddUser, setShowAddUser] = useState(false);
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [showAssignCourse, setShowAssignCourse] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info"); // 'error' | 'success' | 'warning' | 'info'
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleShowAddUsers = () => {
    setShowAddUser(!showAddUser);
  };
  const handleShowAddCourses = () => {
    setShowAddCourse(!showAddCourse);
  };
  const handleShowAddQuestions = () => {
    setShowAddQuestion(!showAddQuestion);
  };
  const handleShowAssignment = () => {
    setShowAssignCourse(!showAssignCourse);
  };
  return (
    <>
  <Box sx={{ height: "50px"}}></Box>        
  <TopNavBar/>
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          width: "100%",
          height: "100%",
          gap: "10px",
        }}
      >
        {" "}
        <Title text={t("managementPage.title")} fontSize={"55px"} weight={800}/>

        <Box
          sx={{
            gap: "10px",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              gap: "10px",

              display: "flex",
              flexDirection: "row",
            }}
          >
            {showAddCourse ? (
              <AddCourseCard
              handleShowAddCourses={handleShowAddCourses}
              snackbarMessage={snackbarMessage}
              setSnackbarMessage={setSnackbarMessage}
              snackbarSeverity={snackbarSeverity}
              setSnackbarSeverity={setSnackbarSeverity}
              snackbarOpen={snackbarOpen}
              setSnackbarOpen={setSnackbarOpen}
              height={"400px"}
              />
            ) : (
              <CustomIconButton
                reverse
                icon={ImportContactsIcon}
                onClick={handleShowAddCourses}
                fontSize={"180px"}
                text={t("managementPage.options.newCourse")}
              />
            )}
            {showAddQuestion ? (
              <AddTestQuestion
              handleShowAddQuestions={handleShowAddQuestions}
              snackbarMessage={snackbarMessage}
              setSnackbarMessage={setSnackbarMessage}
              snackbarSeverity={snackbarSeverity}
              setSnackbarSeverity={setSnackbarSeverity}
              snackbarOpen={snackbarOpen}
              setSnackbarOpen={setSnackbarOpen}
              height={"400px"}
              />
            ) : (
              <CustomIconButton
                icon={QuizIcon}
                onClick={handleShowAddQuestions}
                fontSize={"180px"}
                text={t("managementPage.options.addQuestion")}
              />
            )}
          </Box>
          <Box
            sx={{
              gap: "10px",

              display: "flex",
              flexDirection: "row",
            }}
          >
            {showAddUser ? (
              <AddUserCard
              handleShowAddUsers={handleShowAddUsers}
              snackbarMessage={snackbarMessage}
              setSnackbarMessage={setSnackbarMessage}
              snackbarSeverity={snackbarSeverity}
              setSnackbarSeverity={setSnackbarSeverity}
              snackbarOpen={snackbarOpen}
              setSnackbarOpen={setSnackbarOpen}
              />
            ) : (
              <CustomIconButton
                reverse
                icon={PersonIcon}
                onClick={handleShowAddUsers}
                fontSize={"180px"}
                text={t("managementPage.options.newUser")}
              />
            )}
            {showAssignCourse ? (
              <AssignmentCard
              handleShowAssignment={handleShowAssignment}
              snackbarMessage={snackbarMessage}
              setSnackbarMessage={setSnackbarMessage}
              snackbarSeverity={snackbarSeverity}
              setSnackbarSeverity={setSnackbarSeverity}
              snackbarOpen={snackbarOpen}
              setSnackbarOpen={setSnackbarOpen}
              />
            ) : (
              <CustomIconButton
                icon={AssignmentIndIcon}
                onClick={handleShowAssignment}
                fontSize={"180px"}
                text={t("managementPage.options.assignCourse")}
              />
            )}
          </Box>
        </Box>
      </Box>

      <FeedbackSnackbar
  open={snackbarOpen}
  onClose={() => setSnackbarOpen(false)}
  message={snackbarMessage}
  severity={snackbarSeverity}
/>

    </>
  );
}
