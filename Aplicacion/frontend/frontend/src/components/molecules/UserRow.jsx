import { CardContent, Typography, Box } from "@mui/material";
import CustomButton from '../atoms/CustomButton/CustomButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {Grid} from "@mui/material";
import Title from "../atoms/Title/Title";
import CoursesStateIndicator from "./CoursesStateIndicator";
import ModalCard from "../molecules/ModalCard";
import { useState } from "react";

const UserRow = ({user}) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (

<Grid container display={"flex"} alignItems={"center"} justifyContent={"center"} onClick={handleOpenModal}>

<Grid size={3}>
<Title text={user.username}/>
</Grid>

<Grid size={3}>
<Title text={user.position}/>
</Grid>
<Grid size={3}>
<Title text={user.createdAt}/>

</Grid>
<Grid size={3}>

<CoursesStateIndicator progress={user.progress}/></Grid>
<ModalCard   
open={openModal}
closeModal={handleCloseModal}
        usercourses={user.progress || []}/>
</Grid>
  );
};

export default UserRow;
