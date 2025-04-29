import { Modal, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import useAuthStore from "../../contexts/AuthContext";

const TestMaker = ({ courseId, handleClose, open }) => {
  const getTest = useAuthStore((state) => state.getTest);
  const user = useAuthStore((state) => state.user);

  const correctTest = useAuthStore((state) => state.correctTest);

  const [test, setTest] = useState(null);
  const [answers, setAnswers] = useState({}); // Aquí almacenaremos las respuestas del usuario

  useEffect(() => {
    const fetchTest = async () => {
        console.log(courseId)
      if (!courseId) return;
      const result = await getTest(courseId);
      console.log("Test obtenido:", result.data.courseInfo);

      // Verifica si los datos de test están disponibles y los establece en el estado
      if (result.data?.courseInfo) {
        setTest(result.data.courseInfo);
      } else {
        console.log("Datos no válidos en test.");
      }
    };

    fetchTest();
  }, [courseId]);

  // Manejar la selección de una opción
  const handleAnswerChange = (questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  // Formar el body para la respuesta
  const handleSubmit = async () => {
    const data = {
      userId: user.id, // Este es un ejemplo, debes obtener el ID del usuario desde el contexto o estado
      courseId: courseId,
      answers: answers,
    };
    const result = await correctTest(data)
    console.log(result)

  };

  return (
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
        {test ? (
          <div>
            {test.map((q, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <p><b>{q.question_text}</b></p>
                {q.options ? (
                  Object.entries(q.options).map(([key, option], i) => (
                    <div key={i}>
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        value={key} // Usamos 'key' como el valor de la opción ('a', 'b', etc.)
                        checked={answers[q.id] === key} // Verificamos si esta opción ha sido seleccionada
                        onChange={() => handleAnswerChange(q.id, key)} // Actualizamos la respuesta
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
        ) : (
          "Cargando test..."
        )}
      </Box>
    </Modal>
  );
};

export default TestMaker;
