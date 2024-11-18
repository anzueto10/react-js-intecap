import React from "react";
import {
  Button,
  Container,
  Navbar as NavbarBoostrapt,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarBoostrapt bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <NavbarBoostrapt.Brand className="fw-bold fs-3" as={Link} to="/">
          FitTrack
        </NavbarBoostrapt.Brand>
        <Nav className="d-flex gap-3">
          <Button variant="light" as={Link} to="/auth/login">
            Iniciar sesión
          </Button>
          <Button variant="light" as={Link} to="/app">
            Ir a la app
          </Button>
        </Nav>
      </Container>
    </NavbarBoostrapt>
  );
};

export default Navbar;
