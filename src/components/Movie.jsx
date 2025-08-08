// Presentation

import { useState } from "react";
import { MovieCounter } from "./MovieCounter";
import { Link, useNavigate } from "react-router";

export function Movie({ movie, id }) {
  const [show, setShow] = useState(true);

  // rating >= 8.5 (green) else (red)

  // Conditional Styling
  const ratingStyles = {
    color: movie.rating >= 8.5 ? "green" : "red",
    // fontSize: "32px",
  };

  // Conditional Styling
  const summaryStyles = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  // +1 -> forward
  // -1 -> backward

  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={ratingStyles} className="movie-rating">
            ⭐ {movie.rating}
          </p>
        </div>

        {/*   Task 1.2  */}
        <button onClick={() => setShow(!show)}>Toggle Summary</button>
        {/* <Link to={"/movies/" + id}>View Details</Link> */}
        <button onClick={() => navigate("/movies/" + movie.id)}>View Details</button>

        {/* Conditional Rendering */}
        {show && <p className="movie-summary">{movie.summary}</p>}

        {/* Conditional Styling */}
        {/* <p style={summaryStyles} className="movie-summary">
          {movie.summary}
        </p> */}
        {/* Task 1.1 - Like & DisLike - MovieCounter */}
        <MovieCounter />
      </div>
    </div>
  );
}