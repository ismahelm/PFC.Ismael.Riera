import UserList from '../organisms/UserList';
import Title from '../atoms/Title/Title';
import TopNavBar from '../organisms/TopNavBar';
import { Box } from "@mui/material";
import { useTranslation } from 'react-i18next';

export default function WelcomeTrainer()
{
const {t} = useTranslation()


    return(
        <>
         <Box sx={{ height: "50px"}}></Box>        
         <TopNavBar/>
    <Title text={t("welcomeTrainerPage.title")} fontSize={"55px"} weight={800}/>

            <UserList/>

  
       <TopNavBar/>

   </>
    )
    



}