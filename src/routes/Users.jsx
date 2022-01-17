import { Link, Outlet, useSearchParams } from "react-router-dom";
import { getAllUsers } from "../users";

export default function Users() {
  const users = getAllUsers();
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
              <Link to={user.id.toString()}>{user.name}</Link>
            </li>
          ))}
      </ul>
      <article>
        <Outlet />
      </article>
    </div>
  );
}
