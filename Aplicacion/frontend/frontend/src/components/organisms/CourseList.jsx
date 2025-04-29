import CourseItem from "../molecules/CourseListContent";
import useAuthStore from "../../contexts/AuthContext";
import { useState } from "react";
import CourseViewer from "../molecules/CourseViewer";
import TestMaker from "../organisms/TestViewer";

const CourseList = ({ courses = [] }) => {
  const seeFile = useAuthStore((state) => state.seeCourseFile);
  const [selectedCourse, setSelectedCourse] = useState();
  const [open, setOpen] = useState(false);
  const [openTestModal, setOpenTestModal] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState();
  const [courseWatched, setCourseWatched] = useState({}); // 👈 estado por curso
  const [currentCourseId, setCurrentCourseId] = useState(null);

  const handleOpen = async (course) => {
    const url = await seeFile(course.course_id);
    setSelectedCourse(url);
    setCurrentCourseId(course.course_id);
    setSelectedCourseId(course.course_id); // 👈 para que también tengas el ID seleccionado
    setOpen(true);
  };

  const handleOpenTest = (courseId) => {
    setSelectedCourseId(courseId); // 👈 seteas el curso a testear
    setOpenTestModal(true); // 👈 abres el modal de TestMaker
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

      {courses.map((course, index) => (
        <CourseItem
          key={index}
          assignment={course}
          isValid={true}
          handleSeeCourse={() => handleOpen(course)}
          courseWatched={courseWatched[course.course_id]} // 👈 le dices si el curso fue visto
          handleOpenTest={() => handleOpenTest(course.course_id)} // 👈 ahora sí
        />
      ))}
    </div>
  );
};

export default CourseList;
