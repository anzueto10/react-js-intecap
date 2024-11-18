import ActivitiesFitnessAppPage from "../pages/fitness-app/activities";
import HomeFitnessAppPage from "../pages/fitness-app/home";
import DashboardFitnessAppPage from "../pages/fitness-app/dashboard";
import NotFound from "../pages/not-found";
import FitnessAppLayout from "../layouts/fitness-app";
import ActivityPage from "../pages/fitness-app/activities/details";

const fitnessAppRoutes = {
  path: "app/",
  element: <FitnessAppLayout />,
  children: [
    { path: "", element: <HomeFitnessAppPage /> },
    { path: "actividades", element: <ActivitiesFitnessAppPage /> },
    { path: "actividades/:id", element: <ActivityPage /> },
    { path: "dashboard", element: <DashboardFitnessAppPage /> },
  ],
  errorElement: <NotFound />,
};

export default fitnessAppRoutes;
