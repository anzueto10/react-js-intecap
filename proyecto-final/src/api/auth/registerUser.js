import UsuariosNoEncontradosError from "../../errors/login/UsuariosNoEncontradosError";
import { getUsers, setUsers } from "./users";

const registerUser = ({ email, password }) => {
  const users = getUsers();
  if (!users) throw new UsuariosNoEncontradosError();
  const userYet = users.find((u) => u.email === email);

  if (userYet) throw new Error("Ya existe un usuario con ese correo asignado");

  users.push({
    id: users.length + 1,
    email: email,
    password: password,
    activities: [],
  });

  setUsers(users);
};

export default registerUser;
