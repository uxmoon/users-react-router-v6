import { useParams } from "react-router-dom";
import { getUser } from "../users";

export default function User() {
  const params = useParams();
  const user = getUser(parseInt(params.userId));
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
    </div>
  );
}
