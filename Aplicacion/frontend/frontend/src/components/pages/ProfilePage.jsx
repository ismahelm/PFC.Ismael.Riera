import ProfileCard from "../organisms/ProfileCard";
import Title from "../atoms/Title/Title";
import TopNavBar from "../organisms/TopNavBar";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
export default function ProfilePage()
{
    const {t} = useTranslation()
    

    return(
        <>
        <Box sx={{ height: "50px"}}></Box>        
        <TopNavBar/>
<Box
sx={{
     display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
}}
>
<Title text={t("profilePage.title")} fontSize={"55px"} weight={800}/>
    <ProfileCard/>

</Box>
    
        </>
    )
}