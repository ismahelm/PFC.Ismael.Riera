import LoginPage from "../components/pages/LoginPage";
import ProfilePage from "../components/pages/ProfilePage";
import AuthRoute from "./AuthRoute"; 
import RoleRoute from "./RoleRoute";
import CoursesPage from "../components/pages/CoursesPage";
import WelcomePage from "../components/pages/WelcomePage";
import Management from "../components/pages/Management"; 
import WelcomeTrainer from "../components/pages/WelcomeTrainer";

const routes = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "profile",
    element: <AuthRoute element={<ProfilePage />} />,
  },
  {
    path: "courses",
    element: <AuthRoute element={<CoursesPage />} />,
  },
  {
    path: "welcome",
    element: <AuthRoute element={<WelcomePage />} />,
  },
  {
    path: "welcome-trainer",
    element: <RoleRoute element={<WelcomeTrainer />} allowedRoles={"trainer"} />,
  },
  {
    path: "management",
    element: <RoleRoute element={<Management />} allowedRoles={"trainer"} />,
  },
];

export default routes;
