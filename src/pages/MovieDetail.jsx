import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieDetail } from "../services/tmdb";

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
      alert("Movie already in favorites");
      return;
    }

    favorites.push(movie);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

    alert("Added to favorites");
  }

  return (
    <div>
      <h1>{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />

      <br />
      <br />

      <button onClick={addToFavorites}>
        Add to Favorites
      </button>

      <p>
        Rating:
        {movie.vote_average}
      </p>

      <p>
        Release Date: {movie.release_date}
      </p>

      <p>
        {movie.overview}
      </p>
    </div>
  );
}

export default MovieDetail;