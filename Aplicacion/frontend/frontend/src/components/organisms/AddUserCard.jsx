import { useState } from "react"
import useAuthStore from "../../contexts/AuthContext"
import { Box } from "@mui/material"
import Title from "../atoms/Title"
import TextInput from "../atoms/TextField"
import CustomButton from "../atoms/CustomButton"
import CustomCard from "../atoms/CustomCard"

const AddUserCard = ()=>
{
    
        const [newUserName, setNewUserName] = useState()
        const [newPassword, setNewPassword] = useState()
        const [newEmail, setNewEmail] = useState()
        const [newPosition, setNewPosition] = useState()
        const [newRole, setNewRole] = useState()
        const createUser = useAuthStore((state)=> state.addUser)


        const addUser = async ()=>{
            try {
                await createUser({
                    userName: newUserName,
                    password: newPassword,
                    email: newEmail,
                    position: newPosition,
                    role: newRole
                })
            } catch (error) {
                console.error("Error al añadir usuario:", error);
        
            }
        }

    return(
        <>
        <CustomCard>
        <Title text={"Add User"} fontColor={"primary.font"}/>
                
                <TextInput placeholder="new User name" type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
            <TextInput placeholder="new password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <TextInput placeholder="new email" type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
            <TextInput placeholder="new position" type="text" value={newPosition} onChange={(e) => setNewPosition(e.target.value)} />
            <TextInput placeholder="new role" type="text" value={newRole} onChange={(e) => setNewRole(e.target.value)} />
                     <CustomButton text={"add User"} onClick={addUser}/> 
        </CustomCard>
       
        </>
    )
}

export default AddUserCard