import CustomButton from "../atoms/CustomButton/CustomButton";
import useAuthStore from "../../contexts/AuthContext";
import { useState } from "react";
import TextInput from "../atoms/TextField"
import { Box } from "@mui/material";
import Title from "../atoms/Title"

const AssignmentCard =()=>
    {
            const [selectedCourse, setSelectedCourse] = useState()
            const [selectedUser, setSelectedUser] = useState()
            const assignACourse = useAuthStore((state)=> state.assignCourse)


            const assignCourse = async ()=>{
                try {
            await assignACourse( selectedUser, selectedCourse)    
            } 
            
            catch (error) {
                    console.error("Error al añadir usuario:", error);
            
                }
            }
                
        return(
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: "white",
                width: "100%",
                height: "100%"
            }}
            >
                <Title text={"Assign Course"} fontColor={"primary.font"}/>
                  
               <TextInput placeholder="username" type="text" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)} />
               <TextInput placeholder="course name" type="text" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} />
    
                        <CustomButton text={"assign Course"} onClick={assignCourse}/>
            </Box>
        )

        
    }
    export default AssignmentCard