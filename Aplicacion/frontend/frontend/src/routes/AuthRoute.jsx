import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../contexts/AuthContext";

const AuthRoute = ({ element }) => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/" />;
  }
  
  return element;
};

export default AuthRoute;
