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
import { useTranslation } from "react-i18next"
const AddUserCard = ({handleShowAddUsers, snackbarMessage, setSnackbarMessage,
  snackbarSeverity, setSnackbarSeverity,
  snackbarOpen, setSnackbarOpen
  })=>
{
    
        const [newUserName, setNewUserName] = useState()
        const [newFullName, setNewFullName] = useState()
        const [newFile, setNewFile] = useState(null)
  const {t}=useTranslation()
        const [newPassword, setNewPassword] = useState()
        const [newEmail, setNewEmail] = useState()
        const [newPosition, setNewPosition] = useState()
        const [newRole, setNewRole] = useState()
        const createUser = useAuthStore((state)=> state.addUser)

        const addUser = async () => {
          if (!newFile) return alert("Adjunta una imagen de perfil");
        
          const toBase64 = (file) =>
            new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve(reader.result);
              reader.onerror = (error) => reject(error);
            });
        
          try {
            const base64Image = await toBase64(newFile);
         const string64 = base64Image.split(",")[1];
            const userData = {
              userName: newUserName,
              fullname: newFullName,
              password: newPassword,
              email: newEmail,
              position: newPosition,
              role: newRole,
              profileimage: string64, // 👈 base64 como string
            };
        
            await createUser(userData); // <-- tu función de la store
            setSnackbarMessage(t("success.userCreated"));
setSnackbarSeverity("success");
setSnackbarOpen(true);

          } catch (error) {
           

            console.log("Error",error)


            const status = error.response.status;
      
            if (status === 400) {
              setSnackbarMessage(t("errors.missingFields"));
setSnackbarSeverity("error");
setSnackbarOpen(true);

            } else if (status === 409) {
              setSnackbarMessage(t("errors.userExists"));
setSnackbarSeverity("error");
setSnackbarOpen(true);

            }else if (status === 422) {
              setSnackbarMessage(t("errors.invalidRole"));
setSnackbarSeverity("error");
setSnackbarOpen(true);

            } else if (status === 500) {
              setSnackbarMessage(t("errors.internalIssues"));
setSnackbarSeverity("error");
setSnackbarOpen(true);

            } else {
              setSnackbarMessage(t("errors.unexpectedError"));
              setSnackbarSeverity("error");
              setSnackbarOpen(true);            }
      
            setSnackbarOpen(true); // abre Snackbar
      


          }
        };

    return(
        <>
        <CustomCard >
            <CustomIconButton onClick={handleShowAddUsers} icon={KeyboardArrowUpIcon}/>                
              <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px"
              }}
              >

<Box
              sx={{
                display: "flex",
                flexDirection: "column",
          
              }}
              >
                <TextInput   placeholder={t("newUser.userName")} type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
                <TextInput   placeholder={t("newUser.email")} type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />

                <TextInput placeholder={t("newUser.password")} type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />


              </Box> <Box
              sx={{
                display: "flex",
                flexDirection: "column"
              }}
              >

<TextInput   placeholder={t("newUser.fullName")} type="text" value={newFullName} onChange={(e) => setNewFullName(e.target.value)} />

<TextInput   placeholder={t("newUser.position")} type="text" value={newPosition} onChange={(e) => setNewPosition(e.target.value)} />
<TextInput placeholder={t("newUser.role")} type="text" value={newRole} onChange={(e) => setNewRole(e.target.value)} />


              </Box>
              </Box>
              
              
                   <ImageSelector file={newFile} setFile={setNewFile} />
                   <Box
                   sx={{ mt: 1}}
                   >
                     <CustomButton  text={t("newUser.button")} onClick={addUser}/> 

                   </Box>
        </CustomCard>
       
        </>
    )
}

export default AddUserCard