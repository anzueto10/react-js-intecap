import "./userCard.css";

/**
 *
 *  @param {Object} props
 * @param {{ gender: string, name: { title: string, first: string, last: string }, location: { street: { number: number, name: string }, city: string, state: string, country: string, postcode: string | number, coordinates: { latitude: string, longitude: string }, timezone: { offset: string, description: string } }, email: string, login: { uuid: string, username: string, password: string, salt: string, md5: string, sha1: string, sha256: string }, dob: { date: string, age: number }, registered: { date: string, age: number }, phone: string, cell: string, id: { name: string, value: string | null }, picture: { large: string, medium: string, thumbnail: string } }} props.user
 */

const UserCard = ({ user }) => {
  return (
    <li className="user-card">
      <div className="user-card-header">
        <img
          src={user.picture.medium}
          alt={`${user.name.first} ${user.name.last}`}
          className="user-avatar"
        />
        <h3 className="user-name">
          {user.name.first} {user.name.last}
        </h3>
      </div>
      <p className="user-email">{user.email}</p>
      <p className="user-location">
        {user.location.city}, {user.location.country}
      </p>
      <p className="user-age">Edad: {user.dob.age} años</p>
      <p className="user-username">Username: {user.login.username}</p>
    </li>
  );
};

export default UserCard;
