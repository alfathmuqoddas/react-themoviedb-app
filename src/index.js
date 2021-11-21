import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import MovieDetails from "./MovieDetails";

const routs = (
  <Router>
    <Routes>
      <Route exac path="/" element={<App />} />
      <Route exac path="movie/:id" element={<MovieDetails />} />
    </Routes>
  </Router>
);

ReactDOM.render(routs, document.getElementById("root"));
