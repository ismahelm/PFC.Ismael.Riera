import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import useThemeStore from './contexts/AuthContext.jsx'; 
import { lightTheme, darkTheme } from './theme/index';
import './i18n'; 

function ThemedApp() {
  const { mode } = useThemeStore(); 
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
