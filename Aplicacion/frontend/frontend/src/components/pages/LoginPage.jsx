import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../contexts/AuthContext";
import LoginContainer from "../organisms/LoginContainer";
import LoginForm from "../molecules/LoginForm";
import FeedbackSnackbar from "../organisms/FeedbackSnackbar";

const LoginPage = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const { user } = useAuthStore();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info"); // 'error' | 'success' | 'warning' | 'info'
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ userName, password });
    } catch (err) {
      const status = err.status;

      if (status === 400) {
        setSnackbarMessage("write all");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      } else if (status === 404) {
        setSnackbarMessage("no user");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      } else if (status === 401) {
        setSnackbarMessage("wrong password");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      } else if (status === 500) {
        setSnackbarMessage("internal issues");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      } else {
        setSnackbarMessage("unexpected error");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }

      setSnackbarOpen(true); // abre Snackbar
    }
  };

  useEffect(() => {
    if (user) {
      if (user.role === "user") navigate("/welcome");
      else if (user.role === "trainer") navigate("/welcome-trainer");
    }
  }, [user, navigate]);

  return (
    <>
      <LoginContainer>
        <LoginForm
          userName={userName}
          password={password}
          onUserNameChange={(e) => setUserName(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={handleLogin}
        />
      </LoginContainer>
      <FeedbackSnackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </>
  );
};

export default LoginPage;
