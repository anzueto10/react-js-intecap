import { Outlet } from "react-router-dom";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import NotFound from "../pages/not-found";

const authRoutes = {
  path: "auth/",
  element: <Outlet />,
  children: [
    { path: "login", element: <LoginPage /> },
    { path: "registro", element: <SignupPage /> },
  ],
  errorElement: <NotFound />,
};

export default authRoutes;
