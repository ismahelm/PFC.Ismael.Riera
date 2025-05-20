// src/themes/theme.js
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const lightTheme = createTheme({
  typography: {
    fontFamily: `"Teachers", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    mode: 'light',
    primary: {
      main: grey[800], // gris oscuro
      font: grey[900], // texto principal
    },
    background: {
      default: grey[100], // fondo general
      paper: grey[200],   // tarjetas o paneles
    },
    text: {
      primary: grey[900],
      secondary: grey[600],
      reverse: "#ffffff",
    },
    textInput: {
      base: grey[300],
      hover: grey[400],
      selected: grey[500],
    },
    button: {
      reverse: "#000000",
    },
    iconButton: {
      base: grey[500],
      hover: grey[700],
      selected: grey[900],
    },
    action: {
      hover: grey[300],
      selected: grey[400],
      disabled: grey[500],
    },
    divider: grey[300],
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: grey[700],
            color: "#fff"
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
              borderColor: grey[300],
            },
            "&:hover fieldset": {
              borderColor: grey[500],
            },
            "&.Mui-focused fieldset": {
              borderColor: grey[800],
            },
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: `"Teachers", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#33ffff', // cian neón
      font: '#ff4ff9', // rosa neón
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#39ff14', // verde neón
      secondary: '#ff4ff9',
      reverse: '#000000',
    },
    action: {
      hover: '#00ffff',
      selected: '#ff4ff9',
      disabled: '#666666',
    },
    divider: '#00ffff',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          padding: '10px 20px',
          color: '#000',
          backgroundColor: '#00ffff',
          "&:hover": {
            backgroundColor: '#39ff14',
            color: '#000'
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          "& .MuiOutlinedInput-root": {
            color: '#00ffff',
            "& fieldset": {
              borderColor: '#00ffff',
            },
            "&:hover fieldset": {
              borderColor: '#ff4ff9',
            },
            "&.Mui-focused fieldset": {
              borderColor: '#39ff14',
            },
          },
        },
      },
    },
  },
});
