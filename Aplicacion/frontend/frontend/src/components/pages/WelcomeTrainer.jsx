import DrawerMenu from '../organisms/DrawerMenu';
import { Grid } from '@mui/material';
import UserList from '../organisms/UserList';
import Title from '../atoms/Title/Title';
export default function WelcomeTrainer()
{


    return(
        <>
    <Title text={"ASSIGNMENTS"} fontSize={"55px"} weight={800}/>

            <UserList/>

  
       <DrawerMenu/>

   </>
    )
    



}