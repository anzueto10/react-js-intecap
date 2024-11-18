import { useEffect, useState } from "react";

const useActivities = ({ activitiesDefault }) => {
  const [activities, setActivities] = useState(Array.from(activitiesDefault));
  const addActivity = ({ activity }) => {
    const newActivities = structuredClone(activities);
    setActivities([...newActivities, activity]);
  };

  const editActivity = ({ activity, activityId }) => {
    const newActivities = structuredClone(activities);
    const activitiesIndex = newActivities.findIndex((a) => a.id === activityId);

    newActivities[activitiesIndex] = activity;
    setActivities(newActivities);
  };

  const removeActivity = (activityId) => {
    const newActivities = activities.filter((a) => a.id !== activityId);
    setActivities(newActivities);
  };

  useEffect(() => {
    setActivities(activitiesDefault);
  }, [activitiesDefault]);

  return { activities, addActivity, removeActivity, editActivity };
};

export default useActivities;
