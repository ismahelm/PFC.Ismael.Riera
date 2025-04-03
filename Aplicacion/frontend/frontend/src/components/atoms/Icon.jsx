import React from "react";
import * as MuiIcons from "@mui/icons-material";


const CustomIcon = ({ name, color = "inherit", size = "medium" }) => {
  const IconComponent = MuiIcons[name];

  if (!IconComponent) {
    console.warn(`Icono "${name}" no encontrado.`);
    return null;
  }

  return <IconComponent color={color} fontSize={size} />;
};

export default CustomIcon;
