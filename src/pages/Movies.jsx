import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/tmdb";
import { Link } from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      const data =
        await getPopularMovies();

      setMovies(data);
    }

    fetchMovies();
  }, [])

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      const popularMovies =
        await getPopularMovies();

      setMovies(popularMovies);
      return;
    }

    const results = 
      await searchMovies(searchTerm);

    setMovies(results);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search movie..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button onClick={handleSearch}>
          Search
        </button>
      </div>

      <br />
      <h1>Popular Movies</h1>

      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <h3>{movie.title}</h3>
          </Link>

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