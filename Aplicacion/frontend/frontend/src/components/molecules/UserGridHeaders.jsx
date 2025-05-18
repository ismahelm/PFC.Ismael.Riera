
import {Grid} from "@mui/material";
import Title from "../atoms/Title/Title";
const UserGridHeaders = () => {
  return (

<Grid container display={"flex"} alignItems={"center"} justifyContent={"center"}>

<Grid size={3}>
<Title text="EMPLOYEE" fontSize={"20px"} weight={800}/>
</Grid>

<Grid size={3} >
<Title text="POSITION"fontSize={"20px"} weight={800}/>
</Grid>
<Grid size={3}>
<Title text="MEMBER SINCE" fontSize={"20px"} weight={800}/>

</Grid>
<Grid size={3} >

<Title text="COURSE STATUS"fontSize={"20px"} weight={800}/>
</Grid>

</Grid>
  );
};

export default UserGridHeaders;
