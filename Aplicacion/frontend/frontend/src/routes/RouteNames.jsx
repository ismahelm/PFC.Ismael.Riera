import useAuthStore from "../contexts/AuthContext";

// Convertir routeNames a un hook personalizado
const useRouteNames = () => {
  const role = useAuthStore((state) => state.role);

  if (role === "trainer") {
    return [
      { name: "Home", path: "/welcome-trainer" },
      { name: "Courses", path: "/courses" },

      { name: "Profile", path: "/profile" },
      { name: "Options", path: "/options" },

      { name: "Management", path: "/management" },
    ];
  } else {
    return [
      { name: "Home", path: "/welcome" },
      { name: "Courses", path: "/courses" },

      { name: "Profile", path: "/profile" },
      { name: "Options", path: "/options" },
    ];
  }
};

export default useRouteNames;
