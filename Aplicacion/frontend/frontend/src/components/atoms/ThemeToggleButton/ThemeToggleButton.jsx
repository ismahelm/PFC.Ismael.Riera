// src/components/atoms/ThemeToggleButton.jsx
import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import useThemeStore from '@/contexts/AuthContext';

const ThemeToggleButton = () => {
  const { mode, toggleTheme } = useThemeStore();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggleButton;
