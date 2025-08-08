import "./styles.css";
import { UserList } from "./UserList";
import { Route, Routes, Link, useParams, Navigate } from "react-router";
import { ColorGames } from "./ColorGames";
import { AddMovieList } from "./AddMovieList";
import { useState } from "react";
import { INITIAL_MOVIES } from "./MovieListDetails";
import { About, Contact, NotFound } from "./About";
// conditional Rendering
// conditional styling

//Component
export default function App() {
  const [movies, setMovies] = useState(INITIAL_MOVIES);

  return (
    <div className="App">
      <nav>
        <Link to="/contact">Contact</Link> |<Link to="/about"> About </Link> | |
        <Link to="/user">UserList</Link> | <Link to="/movies">MovieList</Link> |
        <Link to="/color">ColorGames</Link> |
      </nav>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user" element={<UserList />} />
        <Route
          path="movies"
          element={<AddMovieList movies={movies} setMovies={setMovies} />}
        />
        <Route path="color" element={<ColorGames />} />
        <Route path="films" element={<Navigate to="/movies" replace />} />
        <Route path="movies/:id" element={<MovieDetails movies={movies} />} />

        {/* * -> Any path  (else) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function MovieDetails({ movies }) {
  const { id } = useParams();
  console.log(movies);
  const movie = movies[id];

  return (
    <div className="movie-detail-container">
      <iframe
        width="100%"
        height="750"
        src={movie.trailer}
        title="AVENGERS: DOOMSDAY (2026) - FIRST TRAILER | Robert Downey Jr as Doctor Doom | Marvel Comics"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      {/* <img src={movie.poster} alt={movie.name} className="movie-poster" /> */}
      <div className="movie-detail-content-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p className="movie-rating">⭐ {movie.rating}</p>
        </div>

        <p className="movie-summary">{movie.summary}</p>
      </div>
    </div>
  );
}
