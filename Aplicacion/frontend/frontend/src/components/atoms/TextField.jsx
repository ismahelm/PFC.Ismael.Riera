import {React} from "react"
import {TextField} from "@mui/material"
const TextInput = ({placeholder, value, onchange, name, type}) =>{
 return (
    <TextField placeholder={placeholder} value={value} onChange={onchange} name={name} type={type}/>
 )
}

   


export default TextInput;
