import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="card h-100">
      <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
        <Link
          to={`/movie/${movie.imdbID}`}
          className="btn btn-sm btn-outline-primary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
