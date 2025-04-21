// AuthTemplate.jsx
import React from 'react';
import { Box } from '@mui/material';

const AuthTemplate = ({ children }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    width={"100%"}
    bgcolor="#f5f5f5"
  >
    {children}
  </Box>
);

export default AuthTemplate;
