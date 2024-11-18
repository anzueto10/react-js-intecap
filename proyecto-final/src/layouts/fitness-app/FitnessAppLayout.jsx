import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/fitness-app/navbars/main-navbar";
import { SessionProvider } from "../../providers/SessionProvider";
import { ActivitiesProvider } from "../../providers/ActivitiesProvider";

const FitnessAppLayout = () => {
  return (
    <SessionProvider>
      <ActivitiesProvider>
        <NavBar />
        <Outlet />
      </ActivitiesProvider>
    </SessionProvider>
  );
};

export default FitnessAppLayout;
