// src/components/molecules/CustomDivider.jsx

import { Box } from "@mui/material";

const CustomDivider = ({
  width = "60%", 
  height = "2px", 
  gradientColor = "#888", 
  my = "2px", 
}) => {

  return (
    <Box
      sx={{
        width:width ,
        height:  height,
        background: `linear-gradient(to right, transparent, ${gradientColor}, transparent)`,
        marginY: my,
        marginX: "auto",
        marginTop: "10px", marginBottom: "10px"
      }}
    />
  );
};

export default CustomDivider;
