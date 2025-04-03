import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../contexts/AuthContext";

const RoleRoute = ({ element, allowedRoles }) => {
    const isLogged = useAuthStore((state) => state.isLogged);
    const role = useAuthStore((state) => state.role);


  if (!isLogged) {
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/welcome" replace />; // Si no tiene el rol adecuado, lo redirige
  }

  return element;
};

export default RoleRoute;
