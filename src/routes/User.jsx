import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, getUser } from "../users";

export default function User() {
  const params = useParams();
  const navigate = useNavigate();
  const user = getUser(parseInt(params.userId));
  const handleDelete = () => {
    deleteUser(user.id);
    navigate("/users");
  };
  return (
    <div>
      <h1>{user.name}</h1>
      <ul>
        <li>
          <strong>Phone:</strong> {user.phone}
        </li>
        <li>
          <strong>Website:</strong> {user.website}
        </li>
      </ul>
      <button onClick={handleDelete}>Delete user</button>
    </div>
  );
}
