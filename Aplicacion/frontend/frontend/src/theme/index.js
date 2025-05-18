// src/themes/theme.js
import { createTheme } from '@mui/material/styles';
import { grey } from "@mui/material/colors";

export const lightTheme = createTheme({
  typography: {
    fontFamily: `"Teachers", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Azul principal para botones e interacciones
      font: "gray", // Gris para textos
    },
    background: {
      default: grey[100], // Fondo blanco
      paper: grey[200], // Fondo ligeramente gris para tarjetas o cajas
    },
    text: {
      primary: grey[800], // Texto principal gris oscuro
      secondary: grey[600], // Texto gris más claro
      reverse:"#FFFFFF"
    },
    
    textInput: {
      base: "#FFFFFF",
      hover: "#E0E0E0",
      selected: "#9E9E9E"
    },
    button: {
      reverse: "#000000"
    },
    iconButton: {
      base: "#BDBDBD",
      hover: "#757575",
      selected: "#424242"
    },
    action: {
      hover: "#757575", 
      selected: "#e0e0e0", 
      disabled: "#cccccc", 
    },
    divider: "#dcdcdc", 
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", 
          textTransform: "none", 
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#1565c0", 
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#dcdcdc", // Bordes de los inputs
            },
            "&:hover fieldset": {
              borderColor: "#90caf9", // Hover en los inputs
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1976d2", // Bordes de los inputs cuando están enfocados
            },
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Azul claro para el tema oscuro
      font: "purple", // Letras en morado claro para el tema oscuro
    },
    background: {
      default: "#121212", // Fondo oscuro
      paper: "#1e1e1e", // Fondo ligeramente más claro para tarjetas o cajas
    },
    text: {
      primary: "#e0e0e0", // Texto principal en color blanco roto
      secondary: "#b0b0b0", // Texto secundario gris claro
    },
    action: {
      hover: "#333333", // Hover más oscuro en botones
      selected: "#444444", // Selección de inputs más oscuro
      disabled: "#666666", // Deshabilitado en gris oscuro
    },
    divider: "#444444", // Divider en tema oscuro
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#64b5f6", // Hover en botones para el tema oscuro
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#555555", // Bordes de los inputs en tema oscuro
            },
            "&:hover fieldset": {
              borderColor: "#90caf9", // Hover en los inputs (azul claro)
            },
            "&.Mui-focused fieldset": {
              borderColor: "#64b5f6", // Bordes de los inputs cuando están enfocados
            },
          },
        },
      },
    },
  },
});
