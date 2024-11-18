import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getSessionCookie from "../../utils/auth/getSessionCookie";
import { getUser } from "../../api/auth/users";

const useSession = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  const logoutUser = () => {
    document.cookie =
      "__proyecto_finnal_session_data=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=None; Secure;";
    setSession(null);
    setUser(null);
    navigate("/auth/login");
  };

  useEffect(() => {
    const sessionGetted = getSessionCookie();
    if (sessionGetted) {
      setSession(sessionGetted);
      return;
    }
    navigate("/auth/login/");
  }, [navigate]);

  useEffect(() => {
    if (session && !user) {
      const fetchedUser = getUser(session.id);
      setUser(fetchedUser);
    }
  }, [session, user]);

  return { session: { user }, logoutUser };
};

export default useSession;
