import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";

import NotFound from "../../../../pages/not-found";
import { ActivitiesContext } from "../../../../providers/ActivitiesProvider";
import { deleteActivity } from "../../../../api/fitness-app/activities";
import { Save, Trash2 } from "react-bootstrap-icons";
import EditActivityForm from "../../../../components/fitness-app/forms/edit-activity";
import { updateActivity } from "../../../../api/fitness-app/activities";
import { useNavigate, useParams } from "react-router-dom";
import { SessionContext } from "../../../../providers/SessionProvider";

const Page = () => {
  const { id } = useParams();
  const { session } = useContext(SessionContext);
  const { activities, removeActivity, editActivity } =
    useContext(ActivitiesContext);
  const navigate = useNavigate();

  const activity = activities.find((a) => a.id === parseInt(id));
  if (!activity) {
    return <NotFound />;
  }
  const onSubmit = ({ name, duration, calories, date, type }) => {
    try {
      console.log(activity.id);
      const newActivity = updateActivity({
        id: activity.id,
        name,
        duration,
        calories,
        date,
        type,
        userId: session.user.id,
      });

      editActivity({ activity: newActivity, activityId: newActivity.id });
      navigate("/app/actividades");
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-background p-4">
      <Card className="w-100" style={{ maxWidth: "600px" }}>
        <Card.Header>
          <Card.Title>Detalles de la Actividad</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Ver y editar los detalles de tu actividad fitness
          </Card.Subtitle>
        </Card.Header>

        <Card.Body>
          <EditActivityForm
            onSubmit={onSubmit}
            activity={activity}
            formId="update-activity-form"
          />
        </Card.Body>

        <Card.Footer className="d-flex justify-content-between gap-3">
          <Button type="submit" className="mr-2" form="update-activity-form">
            <Save className="mr-2" size={16} /> Guardar Cambios
          </Button>
          <Button
            variant="danger"
            type="button"
            onClick={() => {
              deleteActivity({
                activityId: activity.id,
                userId: session.user.id,
              });
              removeActivity(activity.id);
              navigate("/app/actividades");
            }}
          >
            <Trash2 className="mr-2" size={16} /> Eliminar
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Page;
