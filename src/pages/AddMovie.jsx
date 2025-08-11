import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { MovieCounter } from "../components/MovieCounter";

export function AddMovie() {
const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const[trailer,setTrailer]=useState("")

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
    // setMovies([...movies, newMovie]);
    resetMovieForm();
  };


const navigate = useNavigate();

  return (
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
         <input
          value={trailer}
          onChange={(event) => setTrailer(event.target.value)}
          type="url"
          placeholder="trailer"
        />

        {/* Task 3.2 - Add the color to the list */}
        {/* Existing Colors + New Color */}
        {/* submit -> onSubmit event triggered */}
        <button type="submit">➕ Add</button>
      </form>
  );
}

