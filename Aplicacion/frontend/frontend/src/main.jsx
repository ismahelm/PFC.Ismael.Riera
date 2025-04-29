import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import useThemeStore from './contexts/AuthContext.jsx'; // <-- asegúrate de que este exporte el hook correcto
import { lightTheme, darkTheme } from './theme/index';

function ThemedApp() {
  const { mode } = useThemeStore(); // ✅ Ahora está dentro de un componente React
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemedApp />
    </BrowserRouter>
  </StrictMode>
);
