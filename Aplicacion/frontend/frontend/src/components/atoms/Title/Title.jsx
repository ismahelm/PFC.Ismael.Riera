import { Typography, useTheme } from "@mui/material";

const Title = ({ width, text, marginLeft, fontSize, fontColor ="text.secondary", weight, italic=false}) => {
  const theme = useTheme(); // Obtenemos el tema actual (claro u oscuro)

    return <Typography
    sx={{
      width: width,
      color: fontColor,
      fontSize: fontSize,
      fontWeight: weight,
      fontStyle: italic ? "italic" : "normal", // 👈 aquí añadimos cursiva
      ml: marginLeft
    }}
    >{text}</Typography>;
  };
  
  export default Title;