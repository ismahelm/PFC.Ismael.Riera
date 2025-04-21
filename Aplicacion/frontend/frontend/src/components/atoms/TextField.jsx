import {React} from "react"
import {TextField} from "@mui/material"
const TextInput = ({placeholder, value, onChange, name, type}) =>{
 return (
    <TextField placeholder={placeholder} value={value} onChange={onChange} name={name} type={type} 
    sx={{
      width: "300px"
    }}/>
 )
}

   


export default TextInput;
