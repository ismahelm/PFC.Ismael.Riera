import DrawerMenu from "../organisms/DrawerMenu";
import { Box } from "@mui/material";
import Title from "../atoms/Title/Title"
import AddUserCard from "../organisms/AddUserCard"
import AssignmentCard from "../organisms/AssignmentCard";
import AddCourseCard from "../organisms/AddCourseCard";
import AddTestQuestion from "../organisms/AddTestQuestion";
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import CustomIconButton from "../atoms/CustomIconButton/CustomIconButton";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import QuizIcon from '@mui/icons-material/Quiz';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export default function Management()
{
   const [showAddUser, setShowAddUser]=useState(false)
   const [showAddCourse, setShowAddCourse]=useState(false)
   const [showAddQuestion, setShowAddQuestion]=useState(false)
   const [showAssignCourse, setShowAssignCourse]=useState(false)
const handleShowAddUsers=()=>{
        setShowAddUser(!showAddUser)
}
const handleShowAddCourses=()=>{
    setShowAddCourse(!showAddCourse)
}
const handleShowAddQuestions=()=>{
    setShowAddQuestion(!showAddQuestion)
}
const handleShowAssignment=()=>{
    setShowAssignCourse(!showAssignCourse)
}
    return(
        <>  
           
<Box
display={"flex"}
flexDirection={"column"}
sx={{
    width: "100%",
    height: "100%",
}}
> <Title text={"Management"} fontColor={"primary.font"}/>
{
    showAddCourse?<AddCourseCard handleShowAddCourses={handleShowAddCourses}/>:
    <CustomIconButton icon={ImportContactsIcon} onClick={handleShowAddCourses}fontSize={"80px"}text={" New Course "}/>

}
{
    showAddQuestion?<AddTestQuestion handleShowAddQuestions={handleShowAddQuestions} />:
    <CustomIconButton icon={QuizIcon} onClick={handleShowAddQuestions} fontSize={"80px"} text={" Add Questions "}/>

}
{
    showAddUser?<AddUserCard handleShowAddUsers={handleShowAddUsers} />:
    <CustomIconButton icon={PersonIcon} onClick={handleShowAddUsers}fontSize={"80px"} text={" New User "}/>

}
{
    showAssignCourse?<AssignmentCard handleShowAssignment={handleShowAssignment}/>:
    <CustomIconButton icon={AssignmentIndIcon} onClick={handleShowAssignment}fontSize={"80px"} text={" Assign Course "}/>

}

       <DrawerMenu/>

</Box>
        





        </>
    )
}