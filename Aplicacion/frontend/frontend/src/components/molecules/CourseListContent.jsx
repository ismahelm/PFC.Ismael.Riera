import { Card, CardContent, Typography, IconButton } from "@mui/material";
import CustomButton from "../atoms/Button";
import CustomIcon from "../atoms/Icon";
const CourseItem = (assignment
) => {
    return (
      <Card className="flex items-center p-4 mb-2 shadow-md" >
        <CardContent className="flex-grow">
          <Typography >{assignment.Course.title}</Typography>
        </CardContent>
        <CustomButton text={"curso"}/>
        <CustomButton text={"certificado"} />
        <CustomIcon name={"Circle"} color={assignment.status?"green":"red"}/>
          </Card>
    );
  };

  export default CourseItem