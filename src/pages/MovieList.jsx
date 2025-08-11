import { useEffect, useState } from "react";
import { Movie } from "../components/Movie";
import { AddMovie } from "./AddMovie";

// import { INITIAL_MOVIES } from "./INITIAL_MOVIES";

export function MovieList() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const response = await fetch(
      "https://68959012039a1a2b288f7c29.mockapi.io/Movies"
    );
    const data = await response.json();
    setMovies(data);
  }

  useEffect(() => {
    getMovies();
  }, []);


  

  // C=F(S)

  return (
    <div>
     
      <section className="movie-list-container">
        {movies.map((movie, index) => (
          <Movie key={index} movie={movie} id={index} />
        ))}
      </section>
    </div>
  );
}