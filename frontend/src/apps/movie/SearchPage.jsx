import React, { useState } from "react";
import MovieCard from "./moviecard";

const API_KEY = "eb7fbf30";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      const data = await res.json();
      setMovies(data.Search || []);
    } catch (err) {
      console.error("Error fetching movies", err);
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Search for a movie..."
        onChange={(e) => setQuery(e.target.value)}
        className="form-control mb-2"
      />
      <button className="btn btn-primary mb-3" onClick={searchMovies}>
        Search
      </button>

      {loading && <p>Loading...</p>}

      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-3" key={movie.imdbID}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
