import React from "react";
import { Box } from "@mui/material";

const LoginContainer = ({ children }) => (
  <Box
    sx={{
      backgroundColor: "#f0f2f5",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </Box>
);

export default LoginContainer;
