import CustomButton from "../atoms/CustomButton";
import CustomIconButton from "../atoms/CustomIconButton/CustomIconButton";
import TextInput from "../atoms/TextField";
import { useState } from "react";
import useAuthStore from "../../contexts/AuthContext";
import CourseSelector from "../molecules/CourseSelector";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/material";
import CustomCard from "../atoms/CustomCard";
import { useTranslation } from "react-i18next";

const AddTestQuestion = ({
  handleShowAddQuestions,
  snackbarMessage,
  setSnackbarMessage,
  snackbarSeverity,
  setSnackbarSeverity,
  snackbarOpen,
  setSnackbarOpen, height
}) => {
  const [test, setTest] = useState(0);
 const {t}=useTranslation()
  const [newQuestion, setNewQuestion] = useState("");
  const sendQuestion = useAuthStore((state) => state.addQuestion);
  const [newOptiona, setNewOptiona] = useState();
  const [newOptionb, setNewOptionb] = useState();
  const [newOptionc, setNewOptionc] = useState();
  const [newOptiond, setNewOptiond] = useState();

  const [newCorrectAnswer, setNewCorrectAnswer] = useState("");
  const handleSendQuestion = async () => {
    try {
      await sendQuestion({
        test_id: test,
        question: newQuestion,
        options: {
          a: newOptiona,
          b: newOptionb,
          c: newOptionc,
          d: newOptiond,
        },
        correct_answer: newCorrectAnswer,
      })
      setSnackbarMessage(t("success.questionAdded"));
setSnackbarSeverity("success");
setSnackbarOpen(true);

      
      ;
    } catch (error) {
      console.log("Error");

      const status = error.response.status;

      if (status === 400) {
        setSnackbarMessage(t("errors.missingFields"));
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      } else if (status === 409) {
        setSnackbarMessage(t("errors.questionExists"));
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      } else if (status === 500) {
        setSnackbarMessage(t("errors.internalIssues"));
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      } else {
        setSnackbarMessage(t("errors.unexpectedError"));
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }

      snackbarOpen(true); // abre Snackbar
    }
  };

  const handleCourseChange = (courseId) => {
    setTest(courseId);
  };
  return (
    <CustomCard heigth={height}>
      <CustomIconButton
        onClick={handleShowAddQuestions}
        icon={KeyboardArrowUpIcon}
      />

      <CourseSelector onCourseChange={handleCourseChange} width={"560px"} />
      <TextInput
        marginTopBottom="15px"
        width={"560px"}
        placeholder={t("newQuestion.question")}
        type="text"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <TextInput
            placeholder={t("newQuestion.options.OptionA")}
            type="text"
            value={newOptiona}
            onChange={(e) => setNewOptiona(e.target.value)}
          />
          <TextInput
            placeholder={t("newQuestion.options.OptionB")}
            type="text"
            value={newOptionb}
            onChange={(e) => setNewOptionb(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <TextInput
            placeholder={t("newQuestion.options.OptionC")}
            type="text"
            value={newOptionc}
            onChange={(e) => setNewOptionc(e.target.value)}
          />
          <TextInput
            placeholder={t("newQuestion.options.OptionD")}
            type="text"
            value={newOptiond}
            onChange={(e) => setNewOptiond(e.target.value)}
          />
        </Box>
      </Box>

      <TextInput
        placeholder={t("newQuestion.correct")}
        type="text"
        value={newCorrectAnswer}
        onChange={(e) => setNewCorrectAnswer(e.target.value)}
      />
        <Box
      sx={{
        mt: 1
      }}>
      <CustomButton text={t("newQuestion.button")} onClick={handleSendQuestion} />

      </Box>
    </CustomCard>
  );
};
export default AddTestQuestion;
