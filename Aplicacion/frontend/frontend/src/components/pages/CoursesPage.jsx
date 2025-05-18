import React, { useEffect, useState } from "react";
import CourseList from "../organisms/CourseList";
import DrawerMenu from '../organisms/DrawerMenu';
import useAuthStore from "../../contexts/AuthContext";
import Title from "../atoms/Title/Title";

export default function CoursesPage() {
  const user = useAuthStore((state) => state.user);
  const getCourses = useAuthStore((state) => state.getCourses); 
  const [courses, setCourses] = useState([]);  
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchCourses = async () => {
      if (user) {
        try {
          const response = await getCourses(user.id);  
          setCourses(response.progressList.progressList);  
        } catch (error) {
          console.error("Error al obtener cursos:", error);
        } finally {
          setLoading(false);  
        }
      }
    };

    fetchCourses(); 
  }, [user, getCourses]);  

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <>
    <Title text={"YOUR COURSES"} fontSize={"55px"} weight={800}/>
      {courses!=null&&
         <CourseList courses={courses}
         /> 
 }

      
     
      <DrawerMenu />
    </>
  );
}
