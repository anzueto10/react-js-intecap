import React, { useState } from "react";
import { Button, Form as FormBoostrapt } from "react-bootstrap";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [nameError, setNameError] = useState("");
  const [durationError, setDurationError] = useState();
  const [caloriesError, setCaloriesError] = useState();
  const [dateError, setDateError] = useState();
  const [typeError, setTypeError] = useState();
  const [error, setError] = useState();
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
    <FormBoostrapt onSubmit={handleSubmit} className="d-flex flex-column gap-4">
      {error && (
        <FormBoostrapt.Text className="text-danger">{error}</FormBoostrapt.Text>
      )}
      <FormBoostrapt.Group controlId="name">
        <FormBoostrapt.Label>Nombre</FormBoostrapt.Label>
        <FormBoostrapt.Control
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        {nameError && (
          <FormBoostrapt.Text className="text-danger">
            {nameError}
          </FormBoostrapt.Text>
        )}
      </FormBoostrapt.Group>

      <FormBoostrapt.Group controlId="duration">
        <FormBoostrapt.Label>Duración (minutos)</FormBoostrapt.Label>
        <FormBoostrapt.Control
          type="number"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.currentTarget.value)}
        />
        {durationError && (
          <FormBoostrapt.Text className="text-danger">
            {durationError}
          </FormBoostrapt.Text>
        )}
      </FormBoostrapt.Group>

      <FormBoostrapt.Group controlId="calories">
        <FormBoostrapt.Label>Calorías quemadas</FormBoostrapt.Label>
        <FormBoostrapt.Control
          type="number"
          name="calories"
          value={calories}
          onChange={(e) => setCalories(e.currentTarget.value)}
        />
        {caloriesError && (
          <FormBoostrapt.Text className="text-danger">
            {caloriesError}
          </FormBoostrapt.Text>
        )}
      </FormBoostrapt.Group>

      <FormBoostrapt.Group controlId="date">
        <FormBoostrapt.Label>Fecha</FormBoostrapt.Label>
        <FormBoostrapt.Control
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.currentTarget.value)}
        />

        {dateError && (
          <FormBoostrapt.Text className="text-danger">
            {dateError}
          </FormBoostrapt.Text>
        )}
      </FormBoostrapt.Group>

      <FormBoostrapt.Group controlId="type">
        <FormBoostrapt.Label>Tipo de Actividad</FormBoostrapt.Label>
        <FormBoostrapt.Control
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
        </FormBoostrapt.Control>

        {typeError && (
          <FormBoostrapt.Text className="text-danger">
            {typeError}
          </FormBoostrapt.Text>
        )}
      </FormBoostrapt.Group>

      <Button variant="primary" type="submit">
        Guardar Actividad
      </Button>
    </FormBoostrapt>
  );
};

export default Form;
