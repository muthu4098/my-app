import { useState } from "react";
import { MovieCounter } from "./MovieCounter";

export function Movie({ name = "unknown", poster, summary, rating }) {
  const [show,setShow]=useState(false)
// conditional styles
const styles={
color: rating>=8.5?"green":"red"
}
const summaryStyles={
  display:show?"block":"none"
}
  return (
    <div className="movie-container">
      <img src={poster} alt="movie-poster" />
      <div className="title-container">
        <h1>{name}</h1>
        
        <h2 style={styles}>⭐{rating}</h2>
      </div>
       <button onClick={()=>setShow(!show)}>ToggleSummary </button>
      {/* {show &&<p>{summary}</p>} */}
     <p style={summaryStyles}>{summary}</p>
      <MovieCounter />
    </div>
  );
}
