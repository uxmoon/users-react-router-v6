import { Link } from "react-router-dom";
import { getAllUsers } from "../users";

export default function Users() {
  const users = getAllUsers();
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id.toString()}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
