
import {Grid} from "@mui/material";
import Title from "../atoms/Title/Title";
import { useTranslation } from "react-i18next";
const CourseGridHeaders = () => {
  const {t} = useTranslation()
  return (

<Grid container  display={"flex"} alignItems={"center"} justifyContent={"center"}>

<Grid size={3}>
<Title text={t("coursesPage.headers.course")} fontSize={"26px"} weight={800}/>
</Grid>

<Grid size={3}>
<Title text={t("coursesPage.headers.docsandquiz")} fontSize={"26px"} weight={800}/>
</Grid>
<Grid size={3}>
<Title text={t("coursesPage.headers.downloadCertificate")} fontSize={"26px"} weight={800} width={"100%"}/>

</Grid>
<Grid size={3}>

<Title text={t("coursesPage.headers.validity")} fontSize={"26px"} weight={800}/>
</Grid>

</Grid>
  );
};

export default CourseGridHeaders;
