import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/tmdb";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
        const data = await getPopularMovies();
        setMovies(data.slice(0, 6));
    }

    fetchMovies();
  }, []);

  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero-title">
            <span className="hero-icon">🍿</span>
            <span className="hero-text">Flixora</span>
        </h1>

        <p>
          Discover trending movies,
          save your favorites,
          and explore detailed information about every film.
        </p>
      </div>

      <div className="hero-buttons">
        <a href="/movies">
            <button>🎬 Explore Movies</button>
        </a>
      </div>

      <section className="featured">
        <h2>🔥 Trending Movies</h2>

        <div className="featured-grid">
          {movies.map((movie) => (
            <Link 
              to={`/movie/${movie.id}`}
              className="featured-link"
              key={movie.id}
            >
              <div
                  className="featured-card"
                  key={movie.id}
              >
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                  />

                  <h3>{movie.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;