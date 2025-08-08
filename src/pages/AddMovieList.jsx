import { useState } from "react";
import { Movie } from "./Movie";
import { AddMovie } from "./AddMovie";


export function AddMovieList({movies,setMovies}) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  // const styles = {
  //   background: color,
  // };

  // const [colors, setColors] = useState(INITIAL_COLORS);

  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setRating("");
    setSummary("");
  };

  const addMovie = (event) => {
    event.preventDefault(); // no refresh

    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };

    // Existing movies + new Movie
    setMovies([...movies, newMovie]);
    resetMovieForm();
  };


  
  return (
    <div>
      <form onSubmit={addMovie} className="add-movie-form">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          value={poster}
          onChange={(event) => setPoster(event.target.value)}
          type="text"
          placeholder="Poster"
        />
        <input
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          type="text"
          placeholder="Rating"
        />
        <input
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          type="text"
          placeholder="Summary"
        />

        {/* Task 3.2 - Add the color to the list */}
        {/* Existing Colors + New Color */}
        {/* submit -> onSubmit event triggered */}
        <button type="submit">➕ Add</button>
      </form>

      <section className="movie-list-container">
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie} id={index} />
        ))}
      </section>

    </div>
  );
}
