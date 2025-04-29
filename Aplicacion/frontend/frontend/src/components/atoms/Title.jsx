import { Typography, useTheme } from "@mui/material";

const Title = ({ text, fontSize, fontColor, weight, italic=false}) => {
  const theme = useTheme(); // Obtenemos el tema actual (claro u oscuro)

    return <Typography
    sx={{
      width:" 400px",
      color: theme.palette[fontColor.split('.')[0]][fontColor.split('.')[1]],
      fontSize: fontSize,
      fontWeight: weight,
      fontStyle: italic ? "italic" : "normal", // 👈 aquí añadimos cursiva
    }}
    >{text}</Typography>;
  };
  
  export default Title;