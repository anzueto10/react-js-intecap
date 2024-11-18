const getSessionCookie = () => {
  const nameEQ = "__proyecto_finnal_session_data=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      return JSON.parse(
        decodeURIComponent(c.substring(nameEQ.length, c.length))
      );
    }
  }
  return null;
};

export default getSessionCookie;
