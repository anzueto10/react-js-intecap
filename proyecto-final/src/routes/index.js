import { createBrowserRouter } from "react-router-dom";
import homeRoutes from "./homeRoutes";
import fitnessAppRoutes from "./fitnessAppRoutes";
import NotFound from "../pages/not-found";
import authRoutes from "./authRoutes";

const router = createBrowserRouter([
  homeRoutes,
  fitnessAppRoutes,
  authRoutes,
  { errorElement: <NotFound /> },
]);

export default router;
