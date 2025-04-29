import React from "react";
import { Box } from "@mui/material";
import CustomTextField from "@/components/atoms/TextField"
import CustomButton from '@/components/atoms/CustomButton';
import Title from "@/components/atoms/Title";
const LoginForm = ({ userName, password, onUserNameChange, onPasswordChange, onSubmit }) => (
  <Box
    component="form"
    onSubmit={onSubmit}
    sx={{
      width: "400px",
      padding: "40px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    }}
  >
<Title text={"INICIAR SESION"} fontColor={"primary.font"}/>

    <CustomTextField placeholder="Usuario" value={userName} onChange={onUserNameChange} />
    <CustomTextField placeholder="Contraseña" type="password" value={password} onChange={onPasswordChange} />
    <CustomButton type="submit" text="Entrar" />
  </Box>
);

export default LoginForm;
