import CustomButton from "../atoms/Button";
import DrawerMenu from "../organisms/DrawerMenu";
import useAuthStore from "../../contexts/AuthContext";
import { useState } from "react";
import TextInput from "../atoms/TextField"
import { Box } from "@mui/material";
import Title from "../atoms/Title"
import CourseDropdown from "../molecules/CourseDropdown";


export default function Management()
{
    const [newUserName, setNewUserName] = useState()
    const [newPassword, setNewPassword] = useState()
    const [newEmail, setNewEmail] = useState()
    const [newPosition, setNewPosition] = useState()
    const [newRole, setNewRole] = useState()
    const [selectedCourse, setSelectedCourse] = useState()
    const [selectedUser, setSelectedUser] = useState()

    const createUser = useAuthStore((state)=> state.addUser)
    const assignACourse = useAuthStore((state)=> state.assignCourse)

const addUser = async ()=>{
    try {
        await createUser({
            userName: newUserName,
            newPassword: newPassword,
            newEmail: newEmail,
            newPosition: newPosition,
            newRole: newRole
        })
    } catch (error) {
        console.error("Error al añadir usuario:", error);

    }
}
{/*
const addCourse = async ()=>{
    try {
        
    } catch (error) {
        console.error("Error al añadir usuario:", error);

    }
}*/ }


const assignCourse = async ()=>{
    try {
        console.log(selectedCourse,selectedUser)
await assignACourse( selectedUser, selectedCourse)    
} 

catch (error) {
        console.error("Error al añadir usuario:", error);

    }
}
    

    return(
        <>  
           
<Box
display={"flow"}
sx={{
    width: "1000px",
    height: "100%",
    bgcolor: "white"
}}
> <Title text={"Management"}/>
     <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "white",
            width: "300px"
        }}
        >
            <Title text={"Add User"}/>
                
               <TextInput placeholder="new User name" type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
           <TextInput placeholder="new password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
           <TextInput placeholder="new email" type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
           <TextInput placeholder="new position" type="text" value={newPosition} onChange={(e) => setNewPosition(e.target.value)} />
           <TextInput placeholder="new role" type="text" value={newRole} onChange={(e) => setNewRole(e.target.value)} />
                    <CustomButton text={"add User"} onClick={addUser}/>
        </Box>
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "white",
            width: "300px"
        }}
        >
            <Title text={"Assign Course"}/>
              
           <TextInput placeholder="username" type="text" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)} />
           <TextInput placeholder="course name" type="text" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} />

                    <CustomButton text={"assign Course"} onClick={assignCourse}/>
        </Box>
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "white",
            width: "300px"
        }}
        >
            <Title text={"Add User"}/>
                
               <TextInput placeholder="new User name" type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
           <TextInput placeholder="new password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
           <TextInput placeholder="new email" type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
           <TextInput placeholder="new position" type="text" value={newPosition} onChange={(e) => setNewPosition(e.target.value)} />
           <TextInput placeholder="new role" type="text" value={newRole} onChange={(e) => setNewRole(e.target.value)} />
                    <CustomButton text={"add User"} onClick={addUser}/>
        </Box>
</Box>
       
        





       <DrawerMenu/>
        </>
    )
}