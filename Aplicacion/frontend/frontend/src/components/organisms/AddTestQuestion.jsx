import CustomButton from "../atoms/CustomButton";
import CustomIconButton from "../atoms/CustomIconButton/CustomIconButton";
import TextInput from "../atoms/TextField";
import { useState } from "react";
import useAuthStore from "../../contexts/AuthContext";
import CourseSelector from "../molecules/CourseSelector";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const AddTestQuestion = ({handleShowAddQuestions})=>
{ 
    const [test, setTest] = useState(0);

    const [newQuestion, setNewQuestion] = useState("");
    const sendQuestion = useAuthStore((state)=> state.addQuestion)
    const [newOptiona, setNewOptiona] = useState();
    const [newOptionb, setNewOptionb] = useState();
    const [newOptionc, setNewOptionc] = useState();
    const [newOptiond, setNewOptiond] = useState();

        const [newCorrectAnswer, setNewCorrectAnswer] = useState("");
const handleSendQuestion =()=>{
    try {
        if (newOptiona==null||newOptionb==null||newOptionc==null|newOptiond==null)
        {
            alert("You must Add 4 options")
        }
        if (newQuestion==null)
            {
                alert("You must Add a question")
            }
        sendQuestion({
            test_id: test,
    question: newQuestion,
    options: ({
        a: newOptiona,
        b: newOptionb,
        c: newOptiond,
        d: newOptiond
      }),    correct_answer: newCorrectAnswer

})
    } catch (error) {
        console.error("Error al añadir curso:", error);
    }

}

const handleCourseChange = (courseId) => {
    setTest(courseId);
  };
    return(
        <>
                    <CustomIconButton onClick={handleShowAddQuestions} icon={KeyboardArrowUpIcon}/>                

      <CourseSelector onCourseChange={handleCourseChange} />
        <TextInput placeholder="question" type="text" value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} />

           <TextInput placeholder="option a" type="text" value={newOptiona} onChange={(e) => setNewOptiona(e.target.value)} />
           <TextInput placeholder="option b" type="text" value={newOptionb} onChange={(e) => setNewOptionb(e.target.value)} />
           <TextInput placeholder="option c" type="text" value={newOptionc} onChange={(e) => setNewOptionc(e.target.value)} />
           <TextInput placeholder="option d" type="text" value={newOptiond} onChange={(e) => setNewOptiond(e.target.value)} />

           <TextInput placeholder="correct (a,b,c,d)" type="text" value={newCorrectAnswer} onChange={(e) => setNewCorrectAnswer(e.target.value)} />
            <CustomButton text={"enviar pregunta"} onClick={handleSendQuestion}/>
            </>
    )
}
export default AddTestQuestion

