import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../services/tmdb";
import "./MovieDetail.css";
import { toast } from "react-toastify";

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);

      const data = 
        await getMovieDetail(id);
      
      setMovie(data);

      const favorites =
        JSON.parse(
          localStorage.getItem("favorites")
        ) || [];

      const exists =
        favorites.some(
          (item) => item.id === data.id
        );
      setIsFavorite(exists);
      setLoading(false);
    }

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        🎬Loading movie...
      </div>
    );
  } 
  
  if (!movie) {
    return null;
  }

  const addToFavorites = () => {
    const favorites =
      JSON.parse(
        localStorage.getItem("favorites")
      ) || [];

    const alreadyExists =
      favorites.find(
        (item) => item.id === movie.id
      );

    if (alreadyExists) {
      toast.warning(
        "Movie already in favorites!"
      );
      return;
    }

    setIsFavorite(true);

    const updated = [...favorites, movie,];

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    toast.success("Added to favorites!");
  };

  return (
    <div className="detail-page">

      <div className="detail-container">

        <img
          className="detail-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="detail-content">
          <h1 className="detail-title">
            {movie.title}
          </h1>

          <p className="detail-tagline">
            {movie.tagline}
          </p>

          <div className="detail-meta">

            <div className="meta-box rating">
              <span>⭐</span>
              <span>{movie.vote_average}</span>
            </div>

            <div className="meta-box release">
              <span>📅</span>
              <span>{movie.release_date}</span>
            </div>

            <div className="meta-box runtime">
              <span>⏱️</span>
              <span>{movie.runtime} min</span>
            </div>

          </div>

          <button 
            className="favorite-btn"
            onClick={addToFavorites}
          >
            {isFavorite
              ? "❤️Added"
              : "🤍Add To Favorites"}
          </button>

          <p className="overview">
            {movie.overview}
          </p>

        </div>

      </div>
      
    </div>
  );
}

export default MovieDetail;