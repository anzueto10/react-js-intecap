import MainLayout from "../layouts/main";
import NotFound from "../pages/not-found";
import About from "../pages/about";
import Home from "../pages/home";

const homeRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "", element: <Home /> },
    { path: "about", element: <About /> },
  ],
  errorElement: <NotFound />,
};

export default homeRoutes;
