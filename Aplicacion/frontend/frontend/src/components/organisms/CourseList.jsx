import CourseItem from "../molecules/CourseListContent";

const CourseList = ({ courses=[] }) => {
    return (
      <div className="max-w-md mx-auto">
        {courses.map((course, index) => (
          <CourseItem key={index} {...course} isValid={true} />
        ))}
      </div>
    );
  };
  
  export default CourseList;