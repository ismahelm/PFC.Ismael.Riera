import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../contexts/AuthContext";

const AuthRoute = ({ element }) => {
  const isLogged = useAuthStore((state) => state.isLogged);

  if (!isLogged) {
    return <Navigate to="/" />;
  }
  
  return element;
};

export default AuthRoute;
