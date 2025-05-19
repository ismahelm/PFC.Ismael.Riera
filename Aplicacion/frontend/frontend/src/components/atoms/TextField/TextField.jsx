import {React} from "react"
import {TextField} from "@mui/material"
const CustomTextField = ({placeholder, marginLeft, value, onChange, name, type, width="275px", height="40px", marginTopBottom = "3px"}) =>{
 return (
    <TextField placeholder={placeholder} value={value} onChange={onChange} name={name} type={type} 
    sx={{
      marginTop: marginTopBottom,
      marginBottom: marginTopBottom,
      marginLeft: marginLeft,
      
      width: width,
      height: height,
      "& .MuiInputBase-input": {
        textAlign: "center", // Centra el texto del placeholder
        padding: "0px",
        height: height,
        width: width
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "textInput.base", // Color del borde
        },
        "&:hover fieldset": {
          borderColor: "textInput.hover", // Borde al hacer hover
        },
        "&.Mui-focused fieldset": {
          borderColor: "textInput.selected", // Borde al hacer focus
        },
      },

    }}/>
 )
}

   


export default CustomTextField;
