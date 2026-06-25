import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../services/tmdb";
import "./MovieDetail.css";
import { toast } from "react-toastify";

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] =
    useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const data = 
        await getMovieDetail(id);

      console.log(data);
      
      setMovie(data);
    }

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <h2>Loading...</h2>;
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
            ❤️ Add To Favorites
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