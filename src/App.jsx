import { Counter } from "./Counter";
import { MovieCounter } from "./MovieCounter";
import "./styles.css";
import { UserList } from "./UserList";
import { ColorGame } from "./ColorGame";
import { Route, Routes, Link, useParams } from "react-router";
import { ColorGames } from "./ColorGames";

import { MovieList } from "./MovieList";
import { AddMovieList } from "./AddMovieList";
// conditional Rendering
// conditional styling

//Component
export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/contact">Contact</Link> |<Link to="/about"> About </Link> |{" "} |
        <Link to="/UserList">UserList</Link> |   <Link to="/MovieList">MovieList</Link> |
        <Link to="/ColorGames">ColorGames</Link> |
        {/* <link to="/AddMovieList">AddMovie</link> */}
      </nav>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact/:id" element={<ContactDetails />} />
        <Route path="UserList" element={<UserList />} />
        <Route path="MovieList" element={<MovieList />}/>
        <Route path="ColorGames" element ={<ColorGames />}/>
        <Route path="AddMovieList" element={<AddMovieList />} />
        {/* * -> Any path  (else) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <UserList />  */}
      {/* <MovieList /> */}
      {/* <Counter /> */}
      {/* {<MovieCounter />} */}
      {/* <ColorGames /> */}
      {/* {<AddMovieList />} */}
    </div>
  );
}

function ContactDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Contact Details Page of {id}</h1>
    </div>
  );
}

// /about -> About
function NotFound() {
  return <h1>404 - Not Found </h1>;
}

// /about -> About
function About() {
  return <h1>About Page </h1>;
}

function Contact() {
  return <h1>Contact Page </h1>;
}





