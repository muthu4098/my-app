import { useState } from "react";
import { MovieCounter } from "./MovieCounter";

export function AddMovie({ name = "unknown", poster, summary, rating }) {
  const [show, setShow] = useState(true);
 
  const ratingStyle = {
    color: rating > 8.5 ? "green" : "red",
  };

  const toggleStyle = {
    display: show ? "block" : "none",
  };

  return (
    <div className="movie-container">
      <div>
        <img src={poster} alt="" />
        <div className="title-container">
          <h1>{name}</h1>
          <h2 style={ratingStyle}>{rating}</h2>
        </div>
        <button onClick={() => setShow(show ? false : true)}>Toggle</button>
        {show && <p>{summary}</p>}
        <MovieCounter />
      </div>
    </div>
  );
}

