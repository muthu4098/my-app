import { Link, Navigate, Route, Routes, useNavigate } from "react-router";
import { MovieList } from "./pages/MovieList";
import { About, Home, NotFound } from "./pages/About";
import { ColorGames } from "./pages/ColorGames";
import { MovieDetails } from "./pages/MovieDetails";
import "./styles.css";
import { UserList } from "./pages/UserList";
import { AddMovie } from "./pages/AddMovie";

import Button from '@mui/material/Button';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { EditMovie } from "./pages/EditMovie";


// conditional Renderingpages/UserList";
// conditional styling

//Component
export default function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      {/* Common */}

      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies")}>
            Movies
          </Button>
          <Button color="inherit" onClick={() => navigate("/movies/new")}>
            Add Movie
          </Button>
          <Button color="inherit" onClick={() => navigate("/color-game")}>
            Color Game
          </Button>
          <Button color="inherit" onClick={() => navigate("/users")}>
            Users
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="films" element={<Navigate to="/movies" replace />} />
        <Route path="movies" element={<MovieList />} />
        <Route path="movies/new" element={<AddMovie />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="movies/:id/edit" element={<EditMovie />} />
        <Route path="color-game" element={<ColorGames />} />
        <Route path="users" element={<UserList />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="contact/:id" element={<ContactDetails />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}