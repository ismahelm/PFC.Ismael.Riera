import { useState } from "react"
import useAuthStore from "../../contexts/AuthContext"
import { Box } from "@mui/material"
import Title from "../atoms/Title/Title"
import TextInput from "../atoms/TextField"
import CustomButton from "../atoms/CustomButton"
import FileSelector from "../molecules/FileSelector"
import CustomIconButton from "../atoms/CustomIconButton/CustomIconButton"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const AddCourseCard = ({handleShowAddCourses}) => {
    const addcourse = useAuthStore((state)=> state.createCourse)
  const [newCourseTitle, setNewCourseTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newScoreRequired, setNewScoreRequired] = useState("")

  const [newCertificateValidity, setNewCertificateValidity] = useState("")
  const [newFile, setNewFile] = useState(null)

  const addACourse = async () => {
    if (!newFile) return alert("Attach a file");

    const formData = new FormData()
    formData.append("title", newCourseTitle)
    formData.append("description", newDescription)
    formData.append("certificate_validity", newCertificateValidity)
    formData.append("score_required", newScoreRequired)
    formData.append("optional", true)
    formData.append("file", newFile) // 👈 importante: debe llamarse 'file'

    try { 
        console.log(newScoreRequired)
     const newCourse = await addcourse(formData)
     return newCourse
    } catch (error) {
      console.error("Error al añadir curso:", error);
      alert("Error al crear el curso")
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "white",
        width: "300px",
        p: 2,
        gap: 2,
      }}
    >
      <CustomIconButton onClick={handleShowAddCourses} icon ={KeyboardArrowUpIcon}/>
      <TextInput placeholder="title" type="text" value={newCourseTitle} onChange={(e) => setNewCourseTitle(e.target.value)} />
      <TextInput placeholder="description" type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
      <TextInput placeholder="score required" type="text" value={newScoreRequired} onChange={(e) => setNewScoreRequired(e.target.value)} />

      <TextInput placeholder="certificate validity" type="text" value={newCertificateValidity} onChange={(e) => setNewCertificateValidity(e.target.value)} />
      <FileSelector file={newFile} setFile={setNewFile} />
      <CustomButton text={"Add Course"} onClick={addACourse} />
    </Box>
  )
}

export default AddCourseCard
