import React, { createContext, useContext } from "react";
import useActivities from "../hooks/fitness-app/useActivities";
import { SessionContext } from "../providers/SessionProvider";

const ActivitiesContext = createContext();

const ActivitiesProvider = ({ children }) => {
  const { session } = useContext(SessionContext);

  const { activities, addActivity, removeActivity, editActivity } =
    useActivities({
      activitiesDefault: session?.user?.activities || [],
    });

  return (
    <ActivitiesContext.Provider
      value={{ activities, addActivity, removeActivity, editActivity }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export { ActivitiesProvider, ActivitiesContext };
