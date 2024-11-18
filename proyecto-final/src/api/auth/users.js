export const getUsers = () => {
  const users = JSON.parse(
    localStorage.getItem("__intecap_proyecto_final__users_data__")
  );
  return users || [];
};

export const getUser = (userId) => {
  const users = getUsers();
  const user = users.find((u) => u.id === userId);
  return user;
};

export const setUsers = (users) =>
  localStorage.setItem(
    "__intecap_proyecto_final__users_data__",
    JSON.stringify(users)
  );

export const setUser = (user) => {
  const users = getUsers();
  if (!users) throw new Error("Usuarios no encontrados");
  const newUsers = structuredClone([...users, user]);

  localStorage.setItem(
    "__intecap_proyecto_final__users_data__",
    JSON.stringify(newUsers)
  );
};

export const updateUser = ({ userId, email, password, activities }) => {
  const users = getUsers();
  if (!users) throw new Error("Usuarios no encontrados");
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) throw new Error("Usuario no encontrado");

  users[userIndex] = {
    id: users[userIndex].id,
    email: email ? email : users[userIndex].email,
    password: password ? password : users[userIndex].password,
    activities: activities ? activities : users[userIndex].activities,
  };
  localStorage.setItem(
    "__intecap_proyecto_final__users_data__",
    JSON.stringify(users)
  );
};
