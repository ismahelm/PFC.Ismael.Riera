import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../contexts/AuthContext";
import LoginContainer from "../organisms/LoginContainer";
import LoginForm from "../molecules/LoginForm";
const LoginPage = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const { user } = useAuthStore();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ userName, password });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user) {
      if (user.role === "user") navigate("/welcome");
      else if (user.role === "trainer") navigate("/welcome-trainer");
    }
  }, [user, navigate]);

  return (
    <LoginContainer>
      <LoginForm
        userName={userName}
        password={password}
        onUserNameChange={(e) => setUserName(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={handleLogin}
      />
    </LoginContainer>
  );
};

export default LoginPage;
