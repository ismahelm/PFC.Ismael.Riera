import React from "react";
import { Box } from "@mui/material";
import CustomTextField from "@/components/atoms/TextField"
import CustomButton from '@/components/atoms/CustomButton';
import Title from "@/components/atoms/Title";
import LoginIcon from '@mui/icons-material/Login';
import CustomIconButton from "../atoms/CustomIconButton/CustomIconButton";
const LoginForm = ({ userName, password, onUserNameChange, onPasswordChange, onSubmit }) => (
  <Box
    component="form"
    onSubmit={onSubmit}
    sx={{
      border: "2px solid grey",

      width: "400px",
      padding: "40px",
      backgroundColor: "#fff",
      borderRadius: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    }}
  >
<Title text={"INICIAR SESION"} fontColor={"primary.font"} weight={700} fontSize={"20px"} width={"100%"}/>

    <CustomTextField placeholder="Usuario" value={userName} onChange={onUserNameChange} width={"100%"}/>
    <CustomTextField placeholder="Contraseña" type="password" value={password} onChange={onPasswordChange} width={"100%"} />
    <CustomIconButton
        onClick={onSubmit}
        color="primary"
        size="large"
        icon={LoginIcon}
      />
  </Box>
);

export default LoginForm;
