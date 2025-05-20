import React from "react";
import { Box, Modal, Button, Grid } from "@mui/material";
import CustomButton from "../atoms/CustomButton";
import Title from "../atoms/Title/Title";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

export default function ModalCard({ usercourses = [], open, closeModal }) {
  const getIndicator = (validityDateStr) => {
    if (!validityDateStr) return <CheckBoxOutlineBlankIcon />;
    const today = new Date();
    const validityDate = new Date(validityDateStr);
    const diffInDays = Math.floor((validityDate - today) / (1000 * 60 * 60 * 24));

    if (diffInDays < 0) return <CheckBoxOutlineBlankIcon />;
    if (diffInDays < 30) return <AccessAlarmIcon />;
    return <CheckBoxIcon />;
  };

  return (
    <Modal open={open} onClose={closeModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          maxWidth: "800px",
          maxHeight: "80vh",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 3,
          overflowY: "auto",
          border: "2px solid grey",
          p: 1
        }}
      >
      <Grid container sx={{ml: "40px"}}>
         <Grid container  sx={{ width: "100%"
               
            }}>
               <Grid size={5}>
          <Title text={"Curso"} fontSize={"28px"}/>
    </Grid>
     <Grid size={4} >
          <Title text={"Validez"} fontSize={"28px"}/>
    </Grid>
     <Grid size={3} >
          <Title text={"Estado"} fontSize={"28px"} marginLeft={"50px"}/>
    </Grid>
            </Grid>
   
          {usercourses.map((course, index) => (
              <Grid container sx={{ width: "100%",
               
            }}>
            <Grid container key={index} alignItems="center">
              <Grid size={5} sx={{   display: "flex",
                flexDirection: "row", 
              }}>
                <Title text={course.courseTitle} width={"630px"} />
              </Grid>
              <Grid  size={4}>
                <Box >
                                  <Title   text={course.validity||"no completado"}  />

                </Box>
              </Grid>
              <Grid size={3} display="flex" justifyContent="center">
                {getIndicator(course.validity)}
              </Grid>
            </Grid>
    </Grid>
      ))}
            
      </Grid>
        <Box mt={4} display="flex" justifyContent="center">
          <CustomButton
            text="OK"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
          />
        </Box>
      </Box>
    </Modal>
  );
}
