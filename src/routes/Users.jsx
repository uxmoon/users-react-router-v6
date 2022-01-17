import {
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { getAllUsers } from "../users";

export default function Users() {
  const users = getAllUsers();
  const location = useLocation();

  const [searchParam, setSearchParams] = useSearchParams();
  const filter = searchParam.get("filter") ?? "";
  const handleFilter = (event) => {
    setSearchParams({ filter: event.target.value });
  };
  return (
    <div>
      <h1>Users</h1>
      <input
        value={filter}
        onChange={handleFilter}
        type="text"
        placeholder="Filter users"
      />
      <ul>
        {users
          .filter((user) => {
            if (!filter) return true;
            const name = user.name.toLowerCase();
            return name.includes(filter.toLowerCase());
          })
          .map((user) => (
            <li key={user.id}>
              <NavLink
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
                to={user.id.toString() + location.search}
              >
                {user.name}
              </NavLink>
            </li>
          ))}
      </ul>
      <article>
        <Outlet />
      </article>
    </div>
  );
}
