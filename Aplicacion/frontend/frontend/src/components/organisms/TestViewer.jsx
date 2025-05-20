import { Modal, Box, Button, Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import useAuthStore from "../../contexts/AuthContext";
import FeedbackSnackbar from "./FeedbackSnackBar";

const TestMaker = ({ courseId, handleClose, open }) => {
  const getTest = useAuthStore((state) => state.getTest);
  const user = useAuthStore((state) => state.user);
  const correctTest = useAuthStore((state) => state.correctTest);

  const [test, setTest] = useState(null);
  const [answers, setAnswers] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info"); // 'success' | 'error'
  

  useEffect(() => {
    const fetchTest = async () => {
      if (!courseId) return;

      try {
        const result = await getTest(courseId);

        if (result.data?.data && result.data.data.length > 0) {
          setTest(result.data.data);
        } else {
          setSnackbarSeverity("error");

          setSnackbarMessage("No se pudieron obtener las preguntas del test.");
          handleClose(); // Cerrar modal
        }
      } catch (error) {
        const status = error?.response?.status;

        if (status === 400) {
          setSnackbarSeverity("error");

          setSnackbarMessage("No hay suficientes preguntas en este test.");
        } else if (status === 500) {
          setSnackbarMessage("Error del servidor. Intenta más tarde.");
        } else {
          setSnackbarMessage("Ocurrió un error inesperado.");
        }

        setSnackbarOpen(true);
        handleClose(); // Cerrar modal
      }
    };

    if (open) {
      fetchTest();
    }
  }, [courseId, open]);

  const handleAnswerChange = (questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleSubmit = async () => {
    const data = {
      userId: user.id,
      courseId: courseId,
      answers: answers,
    };

    try {
      const result = await correctTest(data);
handleClose()   
setSnackbarMessage("Test superado");
setSnackbarOpen(true);

} catch (error) {
      const status = error?.response?.status;

      if (status === 400) {
        setSnackbarMessage("Completa todas las respuestas antes de enviar.");
      } else if (status === 500) {
        setSnackbarMessage("Error del servidor. Intenta más tarde.");
      } else {
        setSnackbarMessage("Ocurrió un error inesperado.");
      }

      setSnackbarOpen(true);
    }
  };

  return (
    <>
      {test && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="testmaker"
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Box
            sx={{
              width: "80%",
              height: "90%",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 2,
              borderRadius: 2,
              overflow: "auto",
            }}
          >
            <div>
              {test.map((q) => (
                <div key={q.id} style={{ marginBottom: "20px" }}>
                  <p><b>{q.question_text}</b></p>
                  {q.options ? (
                    Object.entries(q.options).map(([key, option]) => (
                      <div key={key}>
                        <input
                          type="radio"
                          name={`q-${q.id}`}
                          value={key}
                          checked={answers[q.id] === key}
                          onChange={() => handleAnswerChange(q.id, key)}
                        />
                        {option}
                      </div>
                    ))
                  ) : (
                    <p>No hay opciones disponibles.</p>
                  )}
                </div>
              ))}
              <Button onClick={handleSubmit} variant="contained" color="primary">
                Enviar respuestas
              </Button>
            </div>
          </Box>
        </Modal>
      )}

<FeedbackSnackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </>
  );
};

export default TestMaker;
