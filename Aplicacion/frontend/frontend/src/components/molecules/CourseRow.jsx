import { CardContent, Typography, Box } from "@mui/material";
import CustomButton from '../atoms/CustomButton/CustomButton';
import CustomIcon from "../atoms/Icon";
import CustomCard from "@/components/atoms/CustomCard";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {Grid} from "@mui/material";
import Title from "../atoms/Title/Title";
const CourseRow = ({ assignment, handleSeeCourse, handleOpenTest, handleGetCertificate }) => {
  return (

<Grid container  display={"flex"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"}>

<Grid size={3}>
<Title text={assignment.Course.title} fontSize={"18px"} />

</Grid>

<Grid size={3} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"}>
  <CustomButton text={"curso"}  onClick={handleSeeCourse} width="100px"/>
        
            <CustomButton text={"Test"}  onClick={handleOpenTest} width="100px" />
          

</Grid>
<Grid size={3} display={"flex"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"}>

          <CustomButton text={"certificado"} onClick={handleGetCertificate} width="100px"/>

</Grid>
<Grid size={3} display={"flex"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"}>
      {assignment.status ? <CheckCircleIcon/> :<RadioButtonUncheckedIcon/> }


</Grid>

</Grid>
  );
};

export default CourseRow;
