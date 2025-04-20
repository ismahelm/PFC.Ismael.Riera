import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../contexts/AuthContext";

const RoleRoute = ({ element, allowedRoles }) => {
   
    const user = useAuthStore((state) => state.user);


  if (!user) {
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/welcome" replace />; // Si no tiene el rol adecuado, lo redirige
  }

  return element;
};

export default RoleRoute;
