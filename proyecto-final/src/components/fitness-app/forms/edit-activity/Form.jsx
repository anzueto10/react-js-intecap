import React, { useState } from "react";
import { Form as FormBootstrap } from "react-bootstrap";

const Form = ({ onSubmit, activity, formId }) => {
  const [name, setName] = useState(activity.name);
  const [duration, setDuration] = useState(activity.duration);
  const [calories, setCalories] = useState(activity.calories);
  const [date, setDate] = useState(activity.date);
  const [type, setType] = useState(activity.type);
  const [nameError, setNameError] = useState("");
  const [durationError, setDurationError] = useState();
  const [caloriesError, setCaloriesError] = useState();
  const [dateError, setDateError] = useState();
  const [typeError, setTypeError] = useState();
  const [error, setError] = useState();
  console.log(activity);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError("El nombre de la actividad no puede estar vacío");
      return;
    }

    if (!duration) {
      setDurationError("La duración de la actividad no puede estar vacío");
      return;
    }

    try {
      parseInt(duration);
    } catch (e) {
      setDurationError(
        "La duración de la actividad debe estar en minutos enteros"
      );
      return;
    }

    if (!calories) {
      setCaloriesError("Las calorías de la actividad no puede estar vacío");
      return;
    }

    try {
      parseInt(calories);
    } catch (e) {
      setDurationError(
        "Las calorías de la actividad debe estar en minutos enteros"
      );
      return;
    }

    if (!date) {
      setDateError("La fecha de la actividad no puede estar vacío");
      return;
    }

    //TODO comprobar fecha formato

    if (!type) {
      setTypeError("El tipo de la actividad no puede estar vacío");
      return;
    }

    setTypeError("");
    setDateError("");
    setCaloriesError("");
    setDurationError("");
    setNameError("");

    try {
      onSubmit({ name, duration, calories, date, type });
    } catch (e) {
      setError(e.message);
    } finally {
      setTypeError("");
      setDateError("");
      setCaloriesError("");
      setDurationError("");
      setNameError("");
    }
  };
  return (
    <FormBootstrap onSubmit={handleSubmit} id={formId && formId}>
      {error && (
        <FormBootstrap.Text className="text-danger">{error}</FormBootstrap.Text>
      )}
      <FormBootstrap.Group controlId="name">
        <FormBootstrap.Label>Nombre</FormBootstrap.Label>
        <FormBootstrap.Control
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        {nameError && (
          <FormBootstrap.Text className="text-danger">
            {nameError}
          </FormBootstrap.Text>
        )}
      </FormBootstrap.Group>

      <FormBootstrap.Group controlId="duration">
        <FormBootstrap.Label>Duración (minutos)</FormBootstrap.Label>
        <FormBootstrap.Control
          type="number"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.currentTarget.value)}
        />
        {durationError && (
          <FormBootstrap.Text className="text-danger">
            {durationError}
          </FormBootstrap.Text>
        )}
      </FormBootstrap.Group>

      <FormBootstrap.Group controlId="calories">
        <FormBootstrap.Label>Calorías quemadas</FormBootstrap.Label>
        <FormBootstrap.Control
          type="number"
          name="calories"
          value={calories}
          onChange={(e) => setCalories(e.currentTarget.value)}
        />
        {caloriesError && (
          <FormBootstrap.Text className="text-danger">
            {caloriesError}
          </FormBootstrap.Text>
        )}
      </FormBootstrap.Group>

      <FormBootstrap.Group controlId="date">
        <FormBootstrap.Label>Fecha</FormBootstrap.Label>
        <FormBootstrap.Control
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.currentTarget.value)}
        />

        {dateError && (
          <FormBootstrap.Text className="text-danger">
            {dateError}
          </FormBootstrap.Text>
        )}
      </FormBootstrap.Group>

      <FormBootstrap.Group controlId="type">
        <FormBootstrap.Label>Tipo de Actividad</FormBootstrap.Label>
        <FormBootstrap.Control
          as="select"
          name="type"
          value={type}
          onChange={(e) => setType(e.currentTarget.value)}
        >
          <option value="">Selecciona un tipo</option>
          <option value="Cardio">Cardio</option>
          <option value="Fuerza">Fuerza</option>
          <option value="Flexibilidad">Flexibilidad</option>
          <option value="Otro">Otro</option>
        </FormBootstrap.Control>

        {typeError && (
          <FormBootstrap.Text className="text-danger">
            {typeError}
          </FormBootstrap.Text>
        )}
      </FormBootstrap.Group>
    </FormBootstrap>
  );
};

export default Form;
