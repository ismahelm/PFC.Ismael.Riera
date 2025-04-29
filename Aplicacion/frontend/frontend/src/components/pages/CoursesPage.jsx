import React, { useEffect, useState } from "react";
import CourseList from "../organisms/CourseList";
import DrawerMenu from '../organisms/DrawerMenu';
import useAuthStore from "../../contexts/AuthContext";

export default function CoursesPage() {
  const user = useAuthStore((state) => state.user);
  const getCourses = useAuthStore((state) => state.getCourses); // Función para obtener los cursos
  const [courses, setCourses] = useState([]);  // Almacenar cursos aquí
  const [loading, setLoading] = useState(true);  // Para manejar el estado de carga

  useEffect(() => {
    const fetchCourses = async () => {
      if (user) {
        try {
          const response = await getCourses(user.id);  // Esperamos la respuesta
          setCourses(response.progressList.progressList);  
        } catch (error) {
          console.error("Error al obtener cursos:", error);
        } finally {
          setLoading(false);  // Terminamos de cargar
        }
      }
    };

    fetchCourses();  // Llamamos a la función para obtener cursos
  }, [user, getCourses]);  // Ejecutamos el efecto cuando `user` cambie

  if (loading) {
    return <div>Loading...</div>;  // Muestra un mensaje de carga mientras esperas los datos
  }

  return (
    <>
      <h2>CoursesPage</h2>
      {courses!=null&&
         <CourseList courses={courses}
         /> 
 }

      
     
      <DrawerMenu />
    </>
  );
}
