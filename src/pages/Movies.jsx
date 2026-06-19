import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/tmdb";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const data =
        await getPopularMovies();

      setMovies(data);
    }

    fetchMovies();
  }, [])

  return (
    <div>
      <h1>Popular Movies</h1>

      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>

          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />

          <p>
            Rating:
            {movie.vote_average}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Movies;