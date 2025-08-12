import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import { Movie } from "../components/Movie";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router";
// import { INITIAL_MOVIES } from "./INITIAL_MOVIES";

// 1. When will MovieList be mounted?
export function MovieList() {
  const [movies, setMovies] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  async function getMovies() {
    const response = await fetch(
      "https://68959012039a1a2b288f7c29.mockapi.io/Movies",
      { method: "GET" }
    );

    const data = await response.json();
    setMovies(data);
  }

  // Component Mounted - once
  useEffect(() => {
    getMovies();
  }, []);

  // Delete -> Refresh
  const deleteMovie = async (id) => {
    console.log("Deleting...", id);
    const response = await fetch(
      `https://68959012039a1a2b288f7c29.mockapi.io/Movies/${id}`,
      { method: "DELETE" }
    );

    const data = await response.json();
    console.log(data);
    getMovies();
  };

  const navigate = useNavigate();
  // C=F(S)

  return (
    <section className="movie-list-container">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          deleteBtn={
            <IconButton
              aria-label="delete"
              onClick={() => deleteMovie(movie.id)}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          }
          editBtn={
            <IconButton
              aria-label="edit"
              onClick={() => navigate(`/movies/${movie.id}/edit`)}
              color="secondary"
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </section>
  );
}