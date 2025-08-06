import { Counter } from "./Counter";
import { MovieCounter } from "./MovieCounter";
import { MovieList } from "./MovieList";
import "./styles.css";
import { UserList } from "./UserList";
import { ColorGame } from "./ColorGame";
import { Route } from "react-router";
import { ColorGames } from "./ColorGames";
// conditional Rendering
// conditional styling

//Component
export default function App() {
  return (
    <div className="App">
       {/* <UserList />  */}
      {/* <MovieList /> */}
      {/* <Counter /> */}
      {/* {<MovieCounter />} */}
      <ColorGames />
    </div>
  );
}


