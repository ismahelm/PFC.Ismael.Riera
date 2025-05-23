import { CardContent, Typography, Box } from "@mui/material";
import CustomButton from "../atoms/CustomButton/CustomButton";
import CustomIcon from "../atoms/Icon";
import CustomCard from "@/components/atoms/CustomCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Grid } from "@mui/material";
import Title from "../atoms/Title/Title";
import { useTranslation } from "react-i18next";
const CourseRow = ({
  assignment,
  handleSeeCourse,
  handleOpenTest,
  handleGetCertificate,
}) => {
  const { t } = useTranslation();
  return (
    <Grid
      container
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      justifyItems={"center"}
    >
      <Grid size={3}>
        <Title text={assignment.Course.title} fontSize={"18px"} />
      </Grid>

      <Grid
        size={3}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        justifyItems={"center"}
        gap={2}
      >
        <CustomButton
          text={t("courseList.course")}
          onClick={handleSeeCourse}
          width="100px"
        />

        <CustomButton
          text={t("courseList.test")}
          onClick={handleOpenTest}
          width="100px"
        />
      </Grid>
      <Grid
        size={3}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        justifyItems={"center"}
      >
        <CustomButton
          text={t("courseList.certificate")}
          onClick={handleGetCertificate}
          width="100px"
        />
      </Grid>
      <Grid
        size={3}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        justifyItems={"center"}
      >
        {assignment.status ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
      </Grid>
    </Grid>
  );
};

export default CourseRow;
