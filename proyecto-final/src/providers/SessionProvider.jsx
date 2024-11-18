import React, { createContext } from "react";
import useSession from "../hooks/auth/useSession";

const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const { session, logoutUser } = useSession();
  if (!session || !session.user) {
    return <div>Loading...</div>;
  }

  return (
    <SessionContext.Provider value={{ session, logoutUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider, SessionContext };
