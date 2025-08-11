import { Link, Navigate, Route, Routes } from "react-router";
import { MovieList } from "./pages/MovieList";
import { About, Home, NotFound } from "./pages/About";
import { ColorGames } from "./pages/ColorGames";
import { MovieDetails } from "./pages/MovieDetails";
import "./styles.css";
import { UserList } from "./pages/UserList";
import { AddMovie } from "./pages/AddMovie";

// conditional Renderingpages/UserList";
// conditional styling

//Component
export default function App() {
  return (
    <div className="App">
      <nav>
        <Button variant="contained" href="#contained-buttons">
          <Link to="/"> Home</Link> 
        </Button>
        <Button variant="contained" href="#contained-buttons">
          <Link to="/movies">MovieList</Link>
        </Button>
        <Button variant="contained" href="#contained-buttons">
          <Link to="/movies/new">Add Movie</Link>
        </Button>
        <Button variant="contained" href="#contained-buttons">
          <Link to="/user">UserList</Link>
        </Button>
        <Button variant="contained" href="#contained-buttons">
          <Link to="/color">ColorGames</Link>
        </Button>
        <Button variant="contained" href="#contained-buttons">
          <Link to="/about"> About </Link>
        </Button>
      </nav>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="user" element={<UserList />} />
        <Route path="movies" element={<MovieList />} />
        <Route path="color" element={<ColorGames />} />
        <Route path="films" element={<Navigate to="/movies" replace />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="movies/new" element={<AddMovie />} />

        {/* * -> Any path  (else) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
