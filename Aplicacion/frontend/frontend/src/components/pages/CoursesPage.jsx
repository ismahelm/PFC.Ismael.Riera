import CourseList from "../organisms/CourseList"
import DrawerMenu from '../organisms/DrawerMenu';

export default function CoursesPage()
{

    const cursos = ["curso 1", "curso 2", "curso 3", "curso 4"]
    return(
        <>
       CoursesPage
       <CourseList courses={cursos}/>
       <DrawerMenu/>
        </>
    )
}