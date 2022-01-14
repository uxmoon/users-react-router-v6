import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/users" element={<h1>Users</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
