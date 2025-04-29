import { CardContent, Typography, Box } from "@mui/material";
import CustomButton from '../atoms/CustomButton/CustomButton';
import CustomIcon from "../atoms/Icon";
import CustomCard from "@/components/atoms/CustomCard";

const CourseItem = ({ assignment, handleSeeCourse, courseWatched, handleOpenTest }) => {
  return (
    <CustomCard>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        <CardContent>
          <Typography>{assignment.Course.title}</Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <CustomButton text={"curso"} width="150px" onClick={handleSeeCourse} />
          {courseWatched && ( // 👈 Si fue visto, mostrar "Test"
            <CustomButton text={"Test"} width="150px" onClick={handleOpenTest} />
          )}
          <CustomButton text={"certificado"} width="150px" />
        </Box>
        <CustomIcon name={"Circle"} color={assignment.status ? "green" : "red"} />
      </Box>
    </CustomCard>
  );
};

export default CourseItem;
