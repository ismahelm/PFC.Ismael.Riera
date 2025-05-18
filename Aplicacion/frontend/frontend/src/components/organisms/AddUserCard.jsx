import { useState } from "react"
import useAuthStore from "../../contexts/AuthContext"
import { Box } from "@mui/material"
import Title from "../atoms/Title/Title"
import TextInput from "../atoms/TextField"
import CustomButton from "../atoms/CustomButton"
import CustomCard from "../atoms/CustomCard"
import CustomIconButton from "../atoms/CustomIconButton/CustomIconButton"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ImageSelector from "../molecules/ImageSelector"
const AddUserCard = ({handleShowAddUsers})=>
{
    
        const [newUserName, setNewUserName] = useState()
        const [newFullName, setNewFullName] = useState()
        const [newFile, setNewFile] = useState(null)

        const [newPassword, setNewPassword] = useState()
        const [newEmail, setNewEmail] = useState()
        const [newPosition, setNewPosition] = useState()
        const [newRole, setNewRole] = useState()
        const createUser = useAuthStore((state)=> state.addUser)


        const addUser = async () => {
            if (!newFile) return alert("Adjunta una imagen de perfil");
          
            const formData = new FormData();
            formData.append("userName", newUserName);
            formData.append("fullname", newFullName);
            formData.append("password", newPassword);
            formData.append("email", newEmail);
            formData.append("position", newPosition);
            formData.append("role", newRole);
            formData.append("profileimage", newFile); // 👈 importante: mismo nombre esperado por el backend
          
            try {
              await createUser(formData);
            } catch (error) {
              console.error("Error al añadir usuario:", error);
              alert("Error al crear el usuario");
            }
          };

    return(
        <>
        <CustomCard>
            <CustomIconButton onClick={handleShowAddUsers} icon={KeyboardArrowUpIcon}/>                
                <TextInput placeholder="new User name" type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
                <TextInput placeholder="full name" type="text" value={newFullName} onChange={(e) => setNewFullName(e.target.value)} />

            <TextInput placeholder="new password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <TextInput placeholder="new email" type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
            <TextInput placeholder="new position" type="text" value={newPosition} onChange={(e) => setNewPosition(e.target.value)} />
            <TextInput placeholder="new role" type="text" value={newRole} onChange={(e) => setNewRole(e.target.value)} />
                <ImageSelector file={newFile} setFile={setNewFile} />
                     <CustomButton text={"add User"} onClick={addUser}/> 
        </CustomCard>
       
        </>
    )
}

export default AddUserCard