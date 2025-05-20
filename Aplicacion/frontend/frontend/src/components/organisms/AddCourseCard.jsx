import { useState } from "react"
import useAuthStore from "../../contexts/AuthContext"
import { Box } from "@mui/material"
import Title from "../atoms/Title/Title"
import TextInput from "../atoms/TextField"
import CustomButton from "../atoms/CustomButton"
import FileSelector from "../molecules/FileSelector"
import CustomIconButton from "../atoms/CustomIconButton/CustomIconButton"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CustomCard from "../atoms/CustomCard"
import ValiditySelector from "../atoms/ValiditySelector/ValiditySelector"
import ScoreSelector from "../atoms/ScoreSelector/ScoreSelector"
import { useTranslation } from "react-i18next"

const AddCourseCard = ({handleShowAddCourses, snackbarMessage, setSnackbarMessage,
  snackbarSeverity, setSnackbarSeverity,
  snackbarOpen, setSnackbarOpen, height
   }) => {
    const addcourse = useAuthStore((state)=> state.createCourse)
  const [newCourseTitle, setNewCourseTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [newScoreRequired, setNewScoreRequired] = useState("")

  const [newCertificateValidity, setNewCertificateValidity] = useState("")
  const [newFile, setNewFile] = useState(null)
    const {t}= useTranslation()

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

     const newCourse = await addcourse(formData)
     setSnackbarMessage(t("success.courseCreated"));
setSnackbarSeverity("success");
setSnackbarOpen(true);

     return newCourse
    } catch (error) {
     console.log("Error",error)


      const status = error.response.status;

      if (status === 400) {
        setSnackbarMessage(t("errors.missingFields"));
setSnackbarSeverity("error");
setSnackbarOpen(true);

      } else if (status === 409) {
        setSnackbarMessage(t("errors.courseExists"));
setSnackbarSeverity("error");
setSnackbarOpen(true);

      } else if (status === 500) {
        setSnackbarMessage(t("errors.internalIssues"));
setSnackbarSeverity("error");
setSnackbarOpen(true);

      } else {
        setSnackbarMessage(t("errors.unexpectedError"));
setSnackbarSeverity("error");
setSnackbarOpen(true);

      }

      snackbarOpen(true); // abre Snackbar



    }
  }

  return (
    <CustomCard heigth={height}
    >
      <CustomIconButton onClick={handleShowAddCourses} icon ={KeyboardArrowUpIcon}/>

      <TextInput width="100%" height={"40px"} placeholder={t("newCourseCard.title")} type="text" value={newCourseTitle} onChange={(e) => setNewCourseTitle(e.target.value)} />
      <Box
      sx={{marginTop: "5px"}}>

      </Box>
      <TextInput width="100%" height={"40px"} placeholder={t("newCourseCard.description")} type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
     <Box
      sx={{marginTop: "5px"}}>

      </Box>
    <ScoreSelector score={newScoreRequired}setscore={setNewScoreRequired}/>
  <Box
      sx={{
        mt: 2
      }}>
      <ValiditySelector validity={newCertificateValidity} setValidity={setNewCertificateValidity}/>

      </Box>

      <Box
      sx={{marginTop: "5px"}}>

      </Box>
      <FileSelector file={newFile} setFile={setNewFile} />
      <Box
      sx={{marginTop: "5px"}}>

      </Box>
      <CustomButton text={t("newCourseCard.button")} onClick={addACourse} />
    </CustomCard>
  )
}

export default AddCourseCard
