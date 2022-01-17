# React Router v6

Based on [React Router v6 - Guía práctica desde CERO | Tutorial](https://youtu.be/KKXFmzr0nKk)

## Notes about v6

### Basics

- Use `BrowserRouter`, `Routes` and `Route` from **react-router-dom**
- Nest multiple `Route` components inside `Routes`
- `Routes` replaces `Switch`
- `element` replaces `component` and `render` props

### 404 not found

- Use `*` for `path` prop to setup a 404 page when there's no path match
- The order of the routes won't affect other routes if the 404 route is declared first
- `Navigate` replaces `Redirect`
- Import `Navigate` and use it inside element, set the `path`
- Add the `replace` prop if you don't want to keep the navigation history

### Outlet

- Create the route files (home, about and users) and a Layout file
- Create a navigation list using `Link` in Layout
- Import `Outlet` to display the content of the route files
- To connect the `Outlet` with the Routes, wrap all routes under a new one and pass the `Layout` as an element
- Replace `path` prop with `index` for the main Route/path match

### Outlet more

To display the user data in the same page as the users list we can use Outlet and update the Routes to nest them.

```jsx
// users.jsx
  // users.map()
  <article>
    <Outlet />
  </article>

// main.jsx
<Route path="users" element={<Users />}>
  <Route path=":userId" element={<User />} />
</Route>
```

### useParams hook

**Users.jsx**

- We don't need to add the route in each Link, we only use the user id
- To display an individual user we add a new Route with the user id `path="users/:userId`

**User.jsx**

- Import `useParams` hook to use the `:userId` from the url

### useNavigate hook

- This hook replace the `useHistory` hook, it uses a new API
- Optionally you can add `replace: true` to skip the browser history
- To move 2 steps forward or backwards you can set it with numbers
- When we delete a user we can return to the Users list using the `useNavigate` hook
- We set a `path` to move programatically

```jsx
const handleDelete = () => {
  deleteUser(user.id);
  navigate("/users");
};
```

### useSearchParams

When filtering users is recommended to use query params:

`http://localhost:3000/users?filter=name`

- You can copy and paste the search query in the address bar
- Instead of using a `useState` hook we use the `useSearcParams` hook.
- When using setSearchParams it expects a key and a value: `setSearchParamas({filter: e.target.value})`
- The input value is equal to `searchParams.get("filter")` to match the key given
- If filter is undefined or null we set up a fallback value `searchParam.get("filter") ?? ""`
