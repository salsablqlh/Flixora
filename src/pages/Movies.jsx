import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/tmdb";
import { Link } from "react-router-dom";
import "./Movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true); 

      const data =
        await getPopularMovies();

      setMovies(data);
      setLoading(false);
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

  if (loading) {
    return (
      <div className="loading">
        🍿Loading movies...
      </div>
    );
  }

  return (
    <div className="movies-page">
      <h1 className="movies-title">
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
        {movies.length === 0 && (
          <div className="empty-search">
            🎬No movies found
          </div>
        )}
        
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