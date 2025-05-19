
import {Grid} from "@mui/material";
import Title from "../atoms/Title/Title";
import { useTranslation } from "react-i18next";
const UserGridHeaders = () => {
  const {t} = useTranslation()
  return (

<Grid container display={"flex"} alignItems={"center"} justifyContent={"center"}>

<Grid size={3}>
<Title text={t("welcomeTrainerPage.headers.employee")} fontSize={"20px"} weight={800}/>
</Grid>

<Grid size={3} >
<Title text={t("welcomeTrainerPage.headers.position")} fontSize={"20px"} weight={800}/>
</Grid>
<Grid size={3}>
<Title text={t("welcomeTrainerPage.headers.memberSince")} fontSize={"20px"} weight={800}/>

</Grid>
<Grid size={3} >

<Title text={t("welcomeTrainerPage.headers.courseStatus")} fontSize={"20px"} weight={800}/>
</Grid>

</Grid>
  );
};

export default UserGridHeaders;
