import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Users from "./routes/Users";
import About from "./routes/About";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="*" element={<h1>404 page not found</h1>} /> */}
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
