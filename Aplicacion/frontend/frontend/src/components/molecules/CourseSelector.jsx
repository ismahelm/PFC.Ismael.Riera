import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, Box, CircularProgress } from "@mui/material";
import useAuthStore from "../../contexts/AuthContext";
import { useTranslation } from "react-i18next";
const CourseSelector = ({ onCourseChange, width, marginLeft }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCourses = useAuthStore((state) => state.seeCourses);
  const {t}=useTranslation()

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const fetchedCourses = await getCourses();
        setCourses(fetchedCourses.courseInfo);
        console.log(fetchedCourses); // Muestra los cursos después de que se hayan actualizado
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener cursos:", error);
      }
    };

    fetchCourses();
  }, [getCourses]); // Asegúrate de que el efecto se vuelva a ejecutar si `getCourses` cambia

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <FormControl >
      <InputLabel id="course-selector-label">{t("newQuestion.selector")}</InputLabel>
      <Select
        labelId="course-selector-label"
        id="course-selector"
        onChange={(e) => onCourseChange(e.target.value)}
        label="Selecciona un curso"
sx={{
  width: width, marginLeft: marginLeft, 
}}      >
        <MenuItem value="">
          <em>-- Curso --</em>
        </MenuItem>
        {courses.map((course) => (
          <MenuItem key={course.id} value={course.id}>
            {course.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CourseSelector;
