const setSessionCookie = ({ id, email }) => {
  const attributes = {
    id,
    email,
  };

  const attributesString = JSON.stringify(attributes);

  document.cookie = `__proyecto_finnal_session_data=${encodeURIComponent(
    attributesString
  )}; path=/; SameSite=None; Secure`;
};

export default setSessionCookie;
