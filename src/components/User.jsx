import { Counter } from "./Counter";
import { MovieCounter } from "./MovieCounter";
function User({ pic, name }) {
  return (
    <div className="user-container">
      <img src={pic} alt={name} />
      
      <p>
        Hello, <span>{name}</span>🙂‍↕
      </p>
     <MovieCounter />
    </div>
  );
}
export {User};