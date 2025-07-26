import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = "eb7fbf30";
const imdbID = "tt3896198";

const MovieDetail = () => {
  //const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`
      );
      const data = await res.json();
      setMovie(data);
    };
    fetchMovie();
  }, [imdbID]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <Link to="/" className="btn btn-secondary mb-3">
        ← Back to Search
      </Link>
      <h2>
        {movie.Title} ({movie.Year})
      </h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
      <p>
        <strong>Actors:</strong> {movie.Actors}
      </p>
      <p>
        <strong>IMDB Rating:</strong> {movie.imdbRating}
      </p>
    </div>
  );
};

export default MovieDetail;
