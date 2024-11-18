import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

const Page = () => {
  return (
    <div className="bg-light min-vh-100">
      <main>
        {/* Sección principal */}
        <section className="py-5 text-center bg-white">
          <Container>
            <h2 className="display-4 fw-bold mb-3">
              Alcanza tus metas fitness con FitTrack
            </h2>
            <p className="lead mb-4">
              Registra tus actividades, visualiza tu progreso y mejora tu salud
            </p>
            <Button variant="primary" size="lg" as={Link} to="/auth/registro">
              Comienza gratis ➡
            </Button>
          </Container>
        </section>

        {/* Sección de características */}
        <section className="py-5 bg-light">
          <Container>
            <h3 className="text-center fw-bold mb-5">
              ¿Por qué elegir FitTrack?
            </h3>
            <Row className="text-center">
              <Col md={4}>
                <h5 className="fw-bold mb-3">Registro fácil</h5>
                <p>
                  Registra tus entrenamientos en segundos con nuestra interfaz
                  intuitiva.
                </p>
              </Col>
              <Col md={4}>
                <h5 className="fw-bold mb-3">Estadísticas detalladas</h5>
                <p>
                  Visualiza tu progreso con gráficos y análisis personalizados.
                </p>
              </Col>
              <Col md={4}>
                <h5 className="fw-bold mb-3">Motivación constante</h5>
                <p>
                  Recibe recordatorios y celebra tus logros para mantenerte
                  motivado.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Sección de progreso */}
        <section className="py-5 bg-white">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <h3 className="fw-bold mb-4">Visualiza tu progreso</h3>
                <p className="text-muted mb-4">
                  Con FitTrack, puedes ver cómo mejoras día a día. Nuestros
                  gráficos interactivos te muestran tu evolución en tiempo real,
                  ayudándote a mantenerte motivado y enfocado en tus objetivos.
                </p>
                <Button
                  variant="outline-primary"
                  as={Link}
                  to="/caracteristicas"
                >
                  Descubre más características
                </Button>
              </Col>
              <Col md={6}>
                <img
                  src="https://user-images.githubusercontent.com/6562690/54934415-b4d25b80-4edb-11e9-8758-fb29ada50499.png"
                  alt="Gráfico de progreso"
                  className="img-fluid rounded shadow"
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Sección final */}
        <section className="py-5 bg-primary text-white text-center">
          <Container>
            <h3 className="fw-bold mb-3">¿Listo para transformar tu vida?</h3>
            <p className="lead mb-4">
              Únete a miles de personas que ya están mejorando su salud con
              FitTrack
            </p>
            <Button size="lg" variant="light" as={Link} to="/auth/registro">
              Regístrate ahora ❤
            </Button>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default Page;
