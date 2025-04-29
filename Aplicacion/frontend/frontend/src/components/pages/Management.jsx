import DrawerMenu from "../organisms/DrawerMenu";
import { Box } from "@mui/material";
import Title from "../atoms/Title"
import AddUserCard from "../organisms/AddUserCard"
import AssignmentCard from "../organisms/AssignmentCard";
import AddCourseCard from "../organisms/AddCourseCard";

export default function Management()
{
   

    return(
        <>  
           
<Box
display={"flex"}
flexDirection={"column"}
sx={{
    width: "100%",
    height: "100%",
    bgcolor: "white"
}}
> <Title text={"Management"} fontColor={"primary.font"}/>
    <AddUserCard/>
    <AssignmentCard/>
    <AddCourseCard/>

       <DrawerMenu/>

</Box>
        





        </>
    )
}