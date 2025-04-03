import React from "react";
import {List, ListItem, ListItemText} from "@mui/material"
import { useNavigate } from "react-router-dom";
const DrawerContent = ({routeNames})=>
{
    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route)
    }
    return(
<List>
    {routeNames.map((item, index) => (

<ListItem key={index} onClick={()=>handleNavigation(item.path)}>
    <ListItemText primary={item.name}/>
</ListItem>

)
    )}
</List>
    )
}

export default DrawerContent;