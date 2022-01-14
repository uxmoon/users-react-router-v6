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
