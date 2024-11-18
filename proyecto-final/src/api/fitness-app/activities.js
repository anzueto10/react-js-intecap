import { getUser, updateUser } from "../auth/users";

export const getAcitivity = ({ id, userId }) => {
  const user = getUser(userId);
  if (!user) throw new Error("Usuario no encontrado");
  const activity = user.activities.find((a) => a.id === id);
  return activity;
};

export const createActivity = ({
  id,
  name,
  duration,
  calories,
  date,
  type,
  userId,
}) => {
  const user = getUser(userId);
  if (!user) throw new Error("Usuario no encontrado");
  const newActivity = { id, name, duration, calories, date, type, userId };
  const newActivities = [...user.activities, newActivity];
  try {
    updateUser({ activities: newActivities, userId });
    return newActivity;
  } catch (e) {
    throw e;
  }
};

export const deleteActivity = ({ activityId, userId }) => {
  const user = getUser(userId);
  if (!user) throw new Error("Usuario no encontrado");

  const newActivities = user.activities.filter((a) => a.id !== activityId);
  try {
    updateUser({ activities: newActivities, userId });
  } catch (e) {
    throw e;
  }
};

export const updateActivity = ({
  id,
  name,
  duration,
  calories,
  date,
  type,
  userId,
}) => {
  const user = getUser(userId);
  if (!user) throw new Error("Usuario no encontrado");

  const activity = getAcitivity({ id, userId });
  if (!activity) throw new Error("Actividad no encontrada");

  const updatedActivity = {
    id: activity.id,
    name: name ? name : activity.name,
    duration: duration ? duration : activity.duration,
    calories: calories ? calories : activity.calories,
    date: date ? date : activity.date,
    type: type ? type : activity.type,
  };

  const updatedActivities = user.activities.map((act) =>
    act.id === id ? updatedActivity : act
  );

  try {
    updateUser({ activities: updatedActivities, userId });
    return updatedActivity;
  } catch (e) {
    throw e;
  }
};
