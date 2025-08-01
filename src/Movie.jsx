
export function Movie({ name = "unknown", poster, summary, rating }) {
  return (
    <div className="movie-container">
      <img src={poster} alt="" />
      <div className="title-container">
        <h1>{name}</h1>
        <h2>⭐{rating}</h2>
      </div>
      <p>{summary}</p>
    </div>
  );
}
