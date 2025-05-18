import {React} from "react"
import {TextField} from "@mui/material"
const CustomTextField = ({placeholder, value, onChange, name, type, width, height}) =>{
 return (
    <TextField placeholder={placeholder} value={value} onChange={onChange} name={name} type={type} 
    sx={{
      width: width,
      height: height,
      "& .MuiInputBase-input": {
        textAlign: "center", // Centra el texto del placeholder
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
