import CourseRow from "../molecules/CourseRow";

import useAuthStore from "../../contexts/AuthContext";
import { useState } from "react";
import CourseViewer from "../molecules/CourseViewer";
import TestMaker from "../organisms/TestViewer";
import { Grid } from "@mui/material";
import CustomDivider from "../atoms/CustomDivider";
import CourseGridHeaders from "../molecules/CourseGridHeaders";

const CourseList = ({ courses = [] }) => {
  const seeFile = useAuthStore((state) => state.seeCourseFile);
  const userId = useAuthStore ((state)=> state.user.id)
  const [selectedCourse, setSelectedCourse] = useState();
  const [open, setOpen] = useState(false);
  const [openTestModal, setOpenTestModal] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState();
  const [courseWatched, setCourseWatched] = useState({}); // 👈 estado por curso
  const [currentCourseId, setCurrentCourseId] = useState(null);
  const [certificateURL, setCertificateURL] = useState()

  const downloadCertificateFile = useAuthStore((state) => state.getCertificate);

  const handleOpen = async (course) => {
    const url = await seeFile(course.course_id);
    setSelectedCourse(url);
    setCurrentCourseId(course.course_id);
    setSelectedCourseId(course.course_id); 
    setOpen(true);
  };

  const handleOpenTest = (courseId) => {
    console.log(courseId)
    setSelectedCourseId(courseId); 
    setOpenTestModal(true); 
  };
  const handleGetCertificate = async (courseId, userId) => {
    if (!courseId) {
      console.error("No se ha seleccionado un curso válido.");
      return;
    }
  
  
    try {
      const response = await downloadCertificateFile({courseId, userId});  
      console.log(response.data.route)
      setCertificateURL(response); // Guardamos la URL del certificado si la necesitas
  
      // Si el certificado es recibido correctamente, podemos hacer la descarga del archivo
      if (response) {
        const link = document.createElement('a');
        link.href = response.data.route;  // La URL del archivo que recibiste
        link.download = `certificado_${selectedCourseId}.pdf`;  // El nombre del archivo
        link.click();
      }
    } catch (error) {
      console.error("Error al obtener el certificado:", error);
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
        <CourseViewer url={selectedCourse} open={open} handleClose={handleClose} />
      )}

      <TestMaker 
        courseId={selectedCourseId} 
        open={openTestModal} 
        handleClose={() => setOpenTestModal(false)} 
      />

      <Grid container columns={8} direction={"row"}>
      <Grid size={8} sx={{marginBottom: "10px"}}>
<CourseGridHeaders/>   
<CustomDivider width="80%"/>       </Grid>
         {courses.map((course, index) => (
          <Grid size={8} index={index} >
              <CourseRow
          key={index}
          assignment={course}
          isValid={true}
          handleSeeCourse={() => handleOpen(course)}
          courseWatched={courseWatched[course.course_id]} // 👈 le dices si el curso fue visto
          handleOpenTest={() => handleOpenTest(course.course_id)} // 👈 ahora sí
          handleGetCertificate={() => handleGetCertificate(course.course_id, userId) }
        />  { index<courses.length&&<CustomDivider/>}
          </Grid>
           
       
      ))}

      </Grid>
     
    </div>
  );
};

export default CourseList;
