import React from "react";
import IconButton from "@mui/material/IconButton";
import Title from "../Title/Title";

const CustomIconButton = ({
  reverse=false,
  text,
  onClick,
  color = "secondary",
  fontSize = "20px",
  icon: Icon,
  iconColor = "iconButton.base",        // Color inicial del ícono
  hoverIconColor = "iconButton.hover", // Color al hacer hover
  selectedIconColor = "iconButton.selected"
}) => {
  return (
    <IconButton
      onClick={onClick}
      color={color}
      disableRipple
      sx={{
        borderRadius: "8px",
        padding: "8px",
        color: iconColor, // Color inicial del ícono
        '&:hover': {
          backgroundColor: "#fff",
          color: hoverIconColor, // Color al hacer hover
        },
        '&:focus': {
  outline: 'none',
  color: selectedIconColor, // Color al hacer hover

},
'&:focus-visible': {
  outline: 'none',
  boxShadow: 'none',
},
      }}
    >
    {(reverse)?

      <> <Title text={text} fontSize={"25px"} weight={"bold"}/>
       <Icon sx={{ fontSize: fontSize}} /> 
      </>
    :
      <>
       <Icon sx={{ fontSize: fontSize}} />  <Title text={text} weight={"bold"} fontSize={"25px"}/>
      </>
    
    }

    
     
    </IconButton>
  );
};

export default CustomIconButton;
