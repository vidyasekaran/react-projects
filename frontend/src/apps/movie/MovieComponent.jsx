import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import MovieDetail from "./MovieDetail";

function MovieComponent() {
  return (
    <Router>
      <div className="container mt-4">
        <h2>🎬 Movie Search App</h2>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default MovieComponent;
