import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import loginUser from "../../api/auth/loginUser";

const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [error, setError] = useState(null);

  const handleChangeEmail = (e) => setEmail(e.currentTarget.value);
  const handleChangePassword = (e) => setPassword(e.currentTarget.value);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    if (!email) {
      setEmailError("La contraseña no puede estar vacía");
      return;
    }

    setEmailError("");

    if (!password) {
      setPasswordError("La contraseña no puede estar vacía");
      return;
    }

    setPasswordError("");

    //TODO comprobación regex del correo

    try {
      loginUser({ email, password });
      setError("");
      navigate("/app/");
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100 bg-light p-4"
    >
      <Card style={{ width: "22rem" }} className="shadow">
        <Card.Body>
          <Card.Title className="text-center mb-2 fs-4 fw-bold">
            Bienvenido a FitTrack
          </Card.Title>
          <Card.Subtitle className="text-center mb-4 text-muted">
            Ingresa a tu cuenta para continuar
          </Card.Subtitle>

          <Form onSubmit={handleSubmit}>
            {error && <Form.Text className="text-danger">{error}</Form.Text>}
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email</Form.Label>

              <Form.Control
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={handleChangeEmail}
              />

              {emailError && (
                <Form.Text className="text-danger">{emailError}</Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label>Contraseña</Form.Label>

              <Form.Control
                type="password"
                placeholder="**************"
                value={password}
                onChange={handleChangePassword}
              />
              {passwordError && (
                <Form.Text className="text-danger"> {passwordError}</Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId="remember" className="mb-4">
              <Form.Check type="checkbox" label="Recordarme" />
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              className="w-100 mb-3"
              disabled={isLoading}
            >
              {isLoading && (
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              )}
              Iniciar sesión
            </Button>
          </Form>
          <div className="d-flex align-items-center justify-content-center my-3">
            <span className="text-muted text-uppercase fs-6">
              O continúa con
            </span>
          </div>
          <Row className="g-3">
            <Col>
              <Button variant="outline-dark" className="w-100">
                <i className="bi bi-github me-2"></i>Github
              </Button>
            </Col>
            <Col>
              <Button variant="outline-danger" className="w-100">
                <i className="bi bi-google me-2"></i>Google
              </Button>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer className="text-center">
          <Link to="/forgot-password" className="text-muted d-block mb-2">
            ¿Olvidaste tu contraseña?
          </Link>
          <div className="text-muted">
            ¿No tienes una cuenta?{" "}
            <Link to="/auth/registro" className="text-primary">
              Regístrate
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Page;
