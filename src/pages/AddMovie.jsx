import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import { object, string, number } from "yup";

 const movieSchema = object({
  name: string().required(),
  poster: string().required().url().min(4),
  rating: number().required().min(0).max(10).integer(),
  summary: string().required().min(20),
  trailer: string().required().url().min(4),
});


export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  // const resetMovieForm = () => {
  //   setName("");
  //   setPoster("");
  //   setRating("");
  //   setSummary("");
  //   setTrailer("");
  // };
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: null,
        summary: "",
        trailer: "",
      },
      validationSchema: movieSchema, // only if passes onSubmit
      onSubmit: (newMovie) => {
        console.log("Cool", newMovie);
        // API
        addMovie(newMovie);
      },
    });
 

  const navigate = useNavigate();

  const addMovie = async (newMovie) => {
    // event.preventDefault(); // no refresh

    // const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer,
    // };

    // POST
    // 1. method - POST
    // 2. Data - Body & JSON
    // 3. Headers - JSON

    const response = await fetch(
      "https://68959012039a1a2b288f7c29.mockapi.io/Movies",
      {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    navigate("/movies");
    // Existing movies + new Movie
    // setMovies([...movies, newMovie]);
    // resetMovieForm();
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
       <TextField
        variant="outlined"
        label="Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        name="name"
      />

      {touched.name && errors.name ? <p>{errors.name}</p> : null}

      <TextField
        variant="outlined"
        label="Poster"
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
        name="poster"
      />

      {touched.poster && errors.poster ? <p>{errors.poster}</p> : null}

      <TextField
        variant="outlined"
        label="Rating"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        name="rating"
      />

      {touched.rating && errors.rating ? <p>{errors.rating}</p> : null}

      <TextField
        variant="outlined"
        label="Summary"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        name="summary"
      />

      {touched.summary && errors.summary ? <p>{errors.summary}</p> : null}

      <TextField
        variant="outlined"
        label="Trailer"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        name="trailer"
      />

      {touched.trailer && errors.trailer ? <p>{errors.trailer}</p> : null}

      <Button
        color="primary"
        type="submit"
        variant="contained"
        startIcon={<AddIcon />}
      >
        Add
      </Button>
    </form>
  );
}