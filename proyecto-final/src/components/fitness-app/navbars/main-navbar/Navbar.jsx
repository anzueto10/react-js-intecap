import React, { useContext } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar as NavBarBootstrap,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { SessionContext } from "../../../../providers/SessionProvider";

const Navbar = () => {
  const { logoutUser } = useContext(SessionContext);

  return (
    <NavBarBootstrap bg="dark" variant="dark" expand="lg">
      <Container>
        <NavBarBootstrap.Brand as={Link} to="/">
          FitTrack
        </NavBarBootstrap.Brand>
        <NavBarBootstrap.Toggle aria-controls="navbar-nav" />
        <NavBarBootstrap.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/app">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="actividades/">
              Actividades
            </Nav.Link>
            <Nav.Link as={Link} to="dashboard/">
              Dashboard
            </Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={() => logoutUser()}>
            Cerrar Sesión
          </Button>
        </NavBarBootstrap.Collapse>
      </Container>
    </NavBarBootstrap>
  );
};

export default Navbar;
