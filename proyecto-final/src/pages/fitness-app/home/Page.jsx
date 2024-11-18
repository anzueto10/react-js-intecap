import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SessionContext } from "../../../providers/SessionProvider";
import { ActivitiesContext } from "../../../providers/ActivitiesProvider";

const Page = () => {
  const { activities } = useContext(ActivitiesContext);

  const mostFrequentActivity = activities.reduce((acc, activity) => {
    acc[activity.type] = (acc[activity.type] || 0) + 1;
    return acc;
  }, {});

  const maxActivity = Object.entries(mostFrequentActivity).reduce(
    (max, [type, count]) => {
      return count > max.count ? { type, count } : max;
    },
    { type: null, count: 0 }
  );

  return (
    <div className="min-vh-100 bg-light">
      <header className="bg-primary text-white py-4">
        <Container>
          <h1 className="display-4">FitTrack</h1>
          <p className="lead">Tu compañero de fitness personal</p>
        </Container>
      </header>

      <main className="py-5">
        <Container>
          {/* Actividades Recientes */}
          <section className="mb-5">
            <h2 className="mb-4">Actividades Recientes</h2>
            <Row className="g-4">
              {activities.length > 0 ? (
                <>
                  {activities
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .slice(0, Math.min(activities.length, 3))
                    .map((activity) => (
                      <Col md={4} key={activity.id}>
                        <Card>
                          <Card.Header>
                            <Card.Title>{activity.name}</Card.Title>
                          </Card.Header>
                          <Card.Body>
                            <p>
                              Última sesión:{" "}
                              {new Date(activity.date).toLocaleDateString()}
                            </p>
                            <p>Duración: {activity.duration} minutos</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                </>
              ) : (
                <p>No hay actividades recientes.</p>
              )}
            </Row>
            <div className="mt-4">
              <Button to="actividades" as={Link} variant="primary">
                Ver Actividades
              </Button>
            </div>
          </section>

          {/* Tus Estadísticas */}
          <section>
            <h2 className="mb-4">Tus Estadísticas</h2>
            <Row className="g-4">
              <Col md={4}>
                <Card>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <Card.Title className="mb-0">
                      Total de Actividades
                    </Card.Title>
                    <i className="bi bi-activity text-muted"></i>
                  </Card.Header>
                  <Card.Body>
                    <h3 className="fw-bold">{activities.length}</h3>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <Card.Title className="mb-0">
                      Tiempo Total de Ejercicio
                    </Card.Title>
                    <i className="bi bi-graph-up text-muted"></i>
                  </Card.Header>
                  <Card.Body>
                    <h3 className="fw-bold">
                      {`${activities.reduce(
                        (acc, activity) =>
                          acc + parseInt(activity.duration, 10),
                        0
                      )} Minutos`}
                    </h3>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <Card.Title className="mb-0">
                      Tipo de Actividad Favorita
                    </Card.Title>
                    <i className="bi bi-bar-chart text-muted"></i>
                  </Card.Header>
                  <Card.Body>
                    <h3 className="fw-bold">
                      {maxActivity.type ? maxActivity.type : "No registrada"}
                    </h3>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <div className="mt-4">
              <Button to="dashboard" as={Link} variant="primary">
                Ver Estadísticias
              </Button>
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default Page;
