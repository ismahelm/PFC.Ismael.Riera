import { useState } from "react"
import useAuthStore from "../../contexts/AuthContext"
import { Box } from "@mui/material"
import Title from "../atoms/Title"
import TextInput from "../atoms/TextField"
import CustomButton from "../atoms/CustomButton"

const AddCourseCard = ()=>
{
    
        const [newCourseTitle, setNewCourseTitle] = useState()
        const [newDescription, setNewDescription] = useState()
        const [newCertificateValidity, setNewCertificateValidity] = useState()
        const [newPathFile, setNewPathfile] = useState()
        const [newOptional, setNewOptional] = useState()

        const addCourse = useAuthStore((state)=> state.createCourse)


        const addACourse = async ()=>{
            try {
                await addCourse({
                    title: newCourseTitle,
                    description: newDescription,
                    certificate_validity: newCertificateValidity,
                    file_path: newPathFile,
                    optional: true
                })
            } catch (error) {
                console.error("Error al añadir curso:", error);
        
            }
        }

    return(
        <>
         <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "white",
            width: "300px"
        }}
        >
            <Title text={"Add Course"} fontColor={"primary.font"}/>
                
               <TextInput placeholder="title" type="text" value={newCourseTitle} onChange={(e) => setNewCourseTitle(e.target.value)} />
           <TextInput placeholder="description" type="password" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
           <TextInput placeholder="certificate validity" type="text" value={newCertificateValidity} onChange={(e) => setNewCertificateValidity(e.target.value)} />
           <TextInput placeholder="file_pathlol" type="text" value={newPathFile} onChange={(e) => setNewPathfile(e.target.value)} /> 
           <TextInput placeholder="mandatory" type="text" value={newOptional} onChange={(e) => setNewOptional(e.target.value)} />
     
                    <CustomButton text={"add Course"} onClick={addACourse}/>
        </Box>
        </>
    )
}

export default AddCourseCard