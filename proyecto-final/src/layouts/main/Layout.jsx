import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import MainNavBar from "../../components/home/navbars/main-navbar";

const HomeLayout = () => {
  return (
    <>
      <MainNavBar />

      {/* Main Content */}
      <main>
        <Container className="my-5">
          <Outlet />
        </Container>
      </main>

      {/* Footer */}
      <footer className="bg-light py-4">
        <Container className="text-center">
          <p className="mb-0">
            &copy; 2024 FitTrack. Todos los derechos reservados.
          </p>
        </Container>
      </footer>
    </>
  );
};

export default HomeLayout;
