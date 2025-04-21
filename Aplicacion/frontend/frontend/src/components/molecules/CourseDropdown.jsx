import React, { useEffect, useState } from "react";
import Selector from "../atoms/Selector";
import useAuthStore from "../../contexts/AuthContext";

const CourseDropdown = ({ onSelect }) => {
  const user = useAuthStore((state) => state.user);
  const getCourses = useAuthStore((state) => state.getCourses);
  const [courses, setCourses] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      if (user) {
        try {
          const response = await getCourses(user.id);
          const courseList = response.progressList?.progressList || response.data || [];
          setCourses(courseList);
        } catch (error) {
          console.error("Error al obtener los cursos:", error);
        }
      }
    };

    fetchCourses();
  }, [user, getCourses]);

  const handleChange = (e) => {
    const selectedId = e.target.value;
    setSelected(selectedId);
    const selectedCourse = courses.find(
      (c) => c.Course?.id?.toString() === selectedId.toString()
    );
    if (onSelect) onSelect(selectedCourse);
  };

  return (
    <Selector
      label="Curso"
      options={courses.map((c) => ({
        label: c.Course?.title || "Curso sin título",
        value: c.Course?.id,
      }))}
      value={selected}
      onChange={handleChange}
    />
  );
};

export default CourseDropdown;
