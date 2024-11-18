import UserCard from "../users/user-card";
import "./userList.css";

/**
 *
 * @param {Object} props
 * @param {Array<{ gender: string, name: { title: string, first: string, last: string }, location: { street: { number: number, name: string }, city: string, state: string, country: string, postcode: string | number, coordinates: { latitude: string, longitude: string }, timezone: { offset: string, description: string } }, email: string, login: { uuid: string, username: string, password: string, salt: string, md5: string, sha1: string, sha256: string }, dob: { date: string, age: number }, registered: { date: string, age: number }, phone: string, cell: string, id: { name: string, value: string | null }, picture: { large: string, medium: string, thumbnail: string } }>} props.users
 */
const UsersList = ({ users }) => {
  return (
    <>
      {users.length > 0 ? (
        <ul className="user-list">
          {users.map((user) => (
            <UserCard user={user} />
          ))}
        </ul>
      ) : (
        <h2>No hay Usuarios</h2>
      )}
    </>
  );
};

export default UsersList;
