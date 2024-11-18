import React, { useContext, useState } from "react";
import { Button, Card, Table, Modal, Alert, Dropdown } from "react-bootstrap";
import {
  PlusCircle,
  Clock,
  Fire,
  Calendar,
  LightningChargeFill,
  Activity,
  ThreeDots,
  Trash,
  PencilFill,
} from "react-bootstrap-icons";
import CreateActivityForm from "../../../components/fitness-app/forms/create-activity";
import { Link } from "react-router-dom";
import { SessionContext } from "../../../providers/SessionProvider";
import {
  createActivity,
  deleteActivity,
} from "../../../api/fitness-app/activities";
import { ActivitiesContext } from "../../../providers/ActivitiesProvider";

const Page = () => {
  const { session } = useContext(SessionContext);
  const [showModal, setShowModal] = useState(false);

  const { activities, addActivity, removeActivity } =
    useContext(ActivitiesContext);

  const onSubmit = ({ name, duration, calories, date, type }) => {
    try {
      const newActivity = createActivity({
        id: activities.length + 1,
        name,
        duration,
        calories,
        date,
        type,
        userId: session?.user?.id,
      });

      addActivity({
        activity: newActivity,
      });
    } catch (e) {
      alert(e.message);
    } finally {
      setShowModal(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="display-4">Mis Actividades</h1>
        <Button onClick={() => setShowModal(true)}>
          <PlusCircle className="me-2" />
          Nueva Actividad
        </Button>
      </div>

      {/* Modal to add new activity */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir Nueva Actividad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateActivityForm onSubmit={onSubmit} />
        </Modal.Body>
      </Modal>

      {/* Activities Summary */}
      <Card>
        <Card.Header>
          <Card.Title>Resumen de Actividades</Card.Title>
        </Card.Header>
        <Card.Body>
          {activities.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    <LightningChargeFill className="me-2" />
                    Nombre
                  </th>
                  <th>
                    <Clock className="me-2" />
                    Duración
                  </th>
                  <th>
                    <Fire className="me-2" />
                    Calorías
                  </th>
                  <th>
                    <Calendar className="me-2" />
                    Fecha
                  </th>
                  <th>
                    <Activity className="me-2" />
                    Tipo
                  </th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity) => (
                  <tr key={activity.id}>
                    <td>{activity.name}</td>
                    <td>{activity.duration} min</td>
                    <td>{activity.calories} kcal</td>
                    <td>{activity.date}</td>
                    <td>{activity.type}</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          as="button"
                          variant="link"
                          className="btn btn-link text-dark p-0 border-0"
                          id={`dropdown-${activity.id}`}
                        >
                          <ThreeDots />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            className="d-flex align-items-center"
                            as={Link}
                            to={`${activity.id}`}
                          >
                            <PencilFill className="me-1" /> Editar
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="text-danger d-flex align-items-center"
                            as={Button}
                            onClick={() => {
                              deleteActivity({
                                activityId: activity.id,
                                userId: session.user.id,
                              });
                              removeActivity(activity.id);
                            }}
                          >
                            <Trash className="me-1" /> Eliminar
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <Alert variant="info" className="text-center">
              No hay actividades asignadas
            </Alert>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Page;
