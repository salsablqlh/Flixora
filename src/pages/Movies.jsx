import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/tmdb";
import { Link } from "react-router-dom";
import "./Movies.css";

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
    <div className="movies-page">
      <h1 className="movies-titel">
        🎬 Discover Movies
      </h1>

      <div className="search-container">
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

      <div className="movie-grid">
        {movies.map((movie) => (
          <div
            className="movie-card"
            key={movie.id}
          >
            <Link to={`/movie/${movie.id}`}>

              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />

              <div className="movie-info">

                <div className="movie-title">
                  {movie.title}
                </div>

                <div className="rating">
                  ⭐ {movie.vote_average}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;