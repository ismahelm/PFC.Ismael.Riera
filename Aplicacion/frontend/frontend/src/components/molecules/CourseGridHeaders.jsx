
import {Grid} from "@mui/material";
import Title from "../atoms/Title/Title";
const CourseGridHeaders = () => {
  return (

<Grid container  display={"flex"} alignItems={"center"} justifyContent={"center"}>

<Grid size={3}>
<Title text="COURSE" fontSize={"26px"} weight={800}/>
</Grid>

<Grid size={3}>
<Title text="DOCS & QUIZ" fontSize={"26px"} weight={800}/>
</Grid>
<Grid size={3}>
<Title text="CERTIFICATE" fontSize={"26px"} weight={800} width={"100%"}/>

</Grid>
<Grid size={3}>

<Title text="VALIDITY" fontSize={"26px"} weight={800}/>
</Grid>

</Grid>
  );
};

export default CourseGridHeaders;
