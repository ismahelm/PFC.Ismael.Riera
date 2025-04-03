import { Card, CardContent, Typography, IconButton } from "@mui/material";
import CustomButton from "../atoms/Button";
import CustomIcon from "../atoms/Icon";
const CourseItem = () => {
    return (
      <Card className="flex items-center p-4 mb-2 shadow-md">
        <CardContent className="flex-grow">
          <Typography variant="h6">titulo</Typography>
        </CardContent>
        <CustomButton text={"curso"}/>
        <CustomButton text={"certificado"} />
        <CustomIcon name={"Circle"} color={"red"}/>
          </Card>
    );
  };

  export default CourseItem