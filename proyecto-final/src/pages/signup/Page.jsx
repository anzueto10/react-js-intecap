import React, { useState } from "react";
import { Card, Form, Button, Image } from "react-bootstrap";
import { ArrowRight, Github, Twitter } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import registerUser from "../../api/auth/registerUser";
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

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Ingrese un correo válido");
      return;
    }

    try {
      registerUser({ email, password });
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
    <div className="d-flex min-vh-100 bg-light align-items-center justify-content-center p-4">
      <Card style={{ maxWidth: "24rem", width: "100%" }}>
        <Card.Header className="text-center">
          <div className="mb-3">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="FitTrack Logo"
              fluid
              width={64}
              height={64}
            />
          </div>
          <Card.Title className="h5">Bienvenido a FitTrack</Card.Title>
          <Card.Text>Regístrate para continuar tu viaje fitness</Card.Text>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {error && <Form.Text className="text-danger">{error}</Form.Text>}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="tu@ejemplo.com"
                required
                value={email}
                onChange={handleChangeEmail}
              />
              {emailError && (
                <Form.Text className="text-danger">{emailError}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                required
                value={password}
                onChange={handleChangePassword}
              />
              {passwordError && (
                <Form.Text className="text-danger"> {passwordError}</Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3 d-flex align-items-center">
              <Form.Check type="checkbox" id="remember" label="Recordarme" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Iniciar sesión <ArrowRight className="ms-2" />
            </Button>
          </Form>
          <div className="text-center mt-3">
            <a
              href="/recuperar-contrasena"
              className="text-decoration-none text-primary"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <hr />
          <div className="d-grid gap-2">
            <Button
              variant="outline-secondary"
              className="d-flex align-items-center justify-content-center"
            >
              <Github className="me-2" />
              Continuar con GitHub
            </Button>
            <Button
              variant="outline-secondary"
              className="d-flex align-items-center justify-content-center"
            >
              <Twitter className="me-2" />
              Continuar con Twitter
            </Button>
          </div>
        </Card.Body>
        <Card.Footer className="text-center">
          <small className="text-muted">
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/auth/login"
              className="text-primary text-decoration-none"
            >
              Inicia Sesión
            </Link>
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Page;
