import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Users from "./routes/Users";
import User from "./routes/User";
import About from "./routes/About";
import Layout from "./Layout";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<User />} />
        <Route path="about" element={<About />} />
        {/* <Route path="*" element={<h1>404 page not found</h1>} /> */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
