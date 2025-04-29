import {React} from "react"
import {TextField} from "@mui/material"
const CustomTextField = ({placeholder, value, onChange, name, type}) =>{
 return (
    <TextField placeholder={placeholder} value={value} onChange={onChange} name={name} type={type} 
    sx={{
      width: "300px",
      /*
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "primary.main", // aquí aplicas el color del theme
        },
        "&:hover fieldset": {
          borderColor: "primary.dark", // opcional para hover
        },
        "&.Mui-focused fieldset": {
          borderColor: "primary.main", // al hacer focus
        },
      },
*/
    }}/>
 )
}

   


export default CustomTextField;
