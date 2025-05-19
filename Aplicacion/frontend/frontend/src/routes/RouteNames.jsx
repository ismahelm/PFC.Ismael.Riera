import { useTranslation } from "react-i18next";
import useAuthStore from "../contexts/AuthContext";

// Convertir routeNames a un hook personalizado
const useRouteNames = () => {
  const user = useAuthStore((state) => state.user);
  const {t}=useTranslation()
  if (user.role === "trainer") {
    return [
      { name: t("navBar.home"), path: "/welcome-trainer" },
      { name: t("navBar.courses"), path: "/courses" },

      { name: t("navBar.profile"), path: "/profile" },

      { name: t("navBar.management"), path: "/management" },
    ];
  } else {
    return [
      { name: "Home", path: "/welcome" },
      { name: "Courses", path: "/courses" },

      { name: "Profile", path: "/profile" },
    ];
  }
};

export default useRouteNames;
