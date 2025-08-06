import { Counter } from "./Counter";
import { MovieCounter } from "./MovieCounter";
import { MovieList } from "./MovieList";
import "./styles.css";
import { UserList } from "./UserList";
import { ColorGame } from "./ColorGame";
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
      <ColorGame />
    </div>
  );
}



