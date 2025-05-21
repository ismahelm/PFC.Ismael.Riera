import CourseRow from "../molecules/CourseRow";
import useAuthStore from "../../contexts/AuthContext";
import { useState } from "react";
import CourseViewer from "../molecules/CourseViewer";
import TestMaker from "../organisms/TestViewer";
import { Grid } from "@mui/material";
import CustomDivider from "../atoms/CustomDivider";
import CourseGridHeaders from "../molecules/CourseGridHeaders";
import FeedbackSnackbar from "./FeedbackSnackBar";
import { useTranslation } from "react-i18next";

const CourseList = ({ courses = [] }) => {
  const{t} = useTranslation()
  const seeFile = useAuthStore((state) => state.seeCourseFile);
  const userId = useAuthStore((state) => state.user.id);
  const [selectedCourse, setSelectedCourse] = useState();
  const [open, setOpen] = useState(false);
  const [openTestModal, setOpenTestModal] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState();
  const [courseWatched, setCourseWatched] = useState({}); // 👈 estado por curso
  const [currentCourseId, setCurrentCourseId] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info"); // 'success' | 'error'
  const downloadCertificateFile = useAuthStore((state) => state.getCertificate);

  const handleOpen = async (course) => {
    const url = await seeFile(course.course_id);
    setSelectedCourse(url);
    setCurrentCourseId(course.course_id);
    setSelectedCourseId(course.course_id);
    setOpen(true);
  };

  const handleOpenTest = (courseId) => {
    console.log(courseId);
    setSelectedCourseId(courseId);
    setOpenTestModal(true);
  };
  const handleGetCertificate = async (courseId, userId) => {
    try {
      const response = await downloadCertificateFile({ courseId, userId });

      if (response && response.data?.route) {
        const link = document.createElement("a");
        link.href = response.data.route;
        link.download = `certificado_${selectedCourseId}.pdf`;
        link.click();

   
      } 
    } catch (error) {
      console.error("Error al obtener el certificado:", error);
      setSnackbarMessage(t("errors.missingCertificate"));
      setSnackbarSeverity("error");

      setSnackbarOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    if (currentCourseId) {
      setCourseWatched((prev) => ({
        ...prev,
        [currentCourseId]: true,
      }));
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {selectedCourse && (
        <CourseViewer
          url={selectedCourse}
          open={open}
          handleClose={handleClose}
        />
      )}

      <TestMaker
        courseId={selectedCourseId}
        open={openTestModal}
        handleClose={() => setOpenTestModal(false)}
      />

      <Grid container columns={8} direction={"row"}>
        <Grid size={8} sx={{ marginBottom: "10px" }}>
          <CourseGridHeaders />
          <CustomDivider width="80%" />{" "}
        </Grid>
        {courses.map((course, index) => (
          <Grid size={8} index={index}>
            <CourseRow
              key={index}
              assignment={course}
              isValid={true}
              handleSeeCourse={() => handleOpen(course)}
              courseWatched={courseWatched[course.course_id]} // 👈 le dices si el curso fue visto
              handleOpenTest={() => handleOpenTest(course.course_id)} // 👈 ahora sí
              handleGetCertificate={() =>
                handleGetCertificate(course.course_id, userId)
              }
            />{" "}
            {index < courses.length && <CustomDivider />}
          </Grid>
        ))}
      </Grid>
      <FeedbackSnackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </div>
  );
};

export default CourseList;
