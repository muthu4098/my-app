import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

function EditMovie() {
  const { id } = useParams(); // Get movie ID from URL
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  

  // Fetch movie details by ID
  useEffect(() => {
  async function getMovieByid() {
      const response = await fetch(`https://68959012039a1a2b288f7c29.mockapi.io/Movies/${id}`);
      const data = await response.json();
      setName(data.name);
      setPoster(data.poster);
      setRating(data.rating);
      setSummary(data.summary);
      setTrailer(data.trailer);
    }
    getMovieByid();
  }, [id]);

  // Update movie
  async function upDate(event) {
     event.preventDefault();
    await fetch(`https://68959012039a1a2b288f7c29.mockapi.io/Movies/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, poster, rating, summary,trailer }),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/movies"); // Go back to movie list
  }

  return (
    <form onSubmit={upDate} className="edit-movie-form">
      <input type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Movie Name"
      />
      <input type="url"
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Poster URL"
      />
      <input type="number"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        placeholder="Rating"
      />
        <input
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        type="url"
        placeholder="Trailer"
      />
      <textarea
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        placeholder="Summary"
      />
     <Button color="error" type="submit" variant="contained">
        ➕ Save
      </Button>
      </form>
  );
}

export { EditMovie };
