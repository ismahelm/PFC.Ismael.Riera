import React from "react";
import { Box, Typography } from "@mui/material";
import TextInput from "../atoms/TextField"
import CustomButton from "../atoms/Button";
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
    <Typography variant="h5" align="center">
      Iniciar sesión
    </Typography>

    <TextInput label="Usuario" value={userName} onChange={onUserNameChange} />
    <TextInput label="Contraseña" type="password" value={password} onChange={onPasswordChange} />
    <CustomButton type="submit" text="Entrar" />
  </Box>
);

export default LoginForm;
