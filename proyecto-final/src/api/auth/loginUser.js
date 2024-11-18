import CredencialesIncorrectasError from "../../errors/login/CredencialesIncorrectasError";
import UsuariosNoEncontradosError from "../../errors/login/UsuariosNoEncontradosError";
import setSessionCookie from "../../utils/auth/setSessionCokkie";
import { getUsers } from "./users";

const loginUser = ({ email, password }) => {
  const users = getUsers();
  if (!users || users.length < 0) throw new UsuariosNoEncontradosError();

  const userToFind = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!userToFind) throw new CredencialesIncorrectasError();

  setSessionCookie({
    id: userToFind.id,
    email,
  });
};

export default loginUser;
