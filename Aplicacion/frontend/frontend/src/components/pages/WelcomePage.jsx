import useAuthStore from '../../contexts/AuthContext';
import WelcomeCard from '../organisms/WelcomeCard';
import Title from "../atoms/Title/Title";
import TopNavBar from '../organisms/TopNavBar';
import { Box } from "@mui/material";

export default function WelcomePage()
{
    const user = useAuthStore((state) => state.user);

    return(
        <>        <Box sx={{ height: "50px"}}></Box>        
        <TopNavBar/>

      <Title text={"WELCOME"} fontSize={"55px"} weight={800}/>
<Box sx={{ display: "flex", ml: "300px"}}>

          <WelcomeCard user={user}/>
    </Box>    

    </>
    )


}