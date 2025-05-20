import React from "react";
import {Box, List, ListItem, ListItemText} from "@mui/material"
import { useNavigate } from "react-router-dom";
const DrawerContent = ({routeNames})=>
{
    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route)
    }
    return(
<List sx={{ display: "flex", flexDirection: "row",}}>
    {routeNames.map((item, index) => (
<Box
 sx={{ width: "100px"}}
>
<ListItem key={index} onClick={()=>handleNavigation(item.path)}>
    <ListItemText primary={item.name}/>
</ListItem>
</Box>


)
    )}
</List>
    )
}

export default DrawerContent;