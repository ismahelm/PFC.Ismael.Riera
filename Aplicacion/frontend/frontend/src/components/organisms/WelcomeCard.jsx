import Title from "../atoms/Title/Title";
import CustomCard from "../atoms/CustomCard";
import useAuthStore from "../../contexts/AuthContext";
import { useEffect, useState } from "react";

const WelcomeCard = ({ user }) => {
  const getCourses = useAuthStore((state) => state.getCourses);
  const [courses, setCourses] = useState([]);
  const [allCoursesValid, setAllCoursesValid] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      if (user) {
        try {
          const response = await getCourses(user.id);
          const courseList = response.progressList.progressList;

          setCourses(courseList);

          // Verificamos si todos los cursos están en fecha
          const today = new Date();
          const allValid = courseList.every((course) => {
            if (!course.validity) return false;
            return new Date(course.validity) >= today;
          });

          setAllCoursesValid(allValid);
        } catch (error) {
          console.error("Error al obtener cursos:", error);
        }
      }
    };

    fetchCourses();
  }, [user, getCourses]);

  return (
    <CustomCard width={"600px"} heigth={"400px"} children={
      <>
        <Title text={"Bienvenido " + user.username} />
        {allCoursesValid ? 
        <>
                <Title text={"Todos tus cursos están vigentes "} />
                
                <Title text={"¿Estas interesado en algun curso de promocion? "} />
    </>
    :
    
    <Title text={"PArece que tienes algún curso caducado :( "} />
    
    }

      </>
    } />
  );
};

export default WelcomeCard;
