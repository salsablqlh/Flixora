import { useEffect, useState } from "react";
import "./Favorites.css";
import { toast } from "react-toastify";

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const data = JSON.parse(
            localStorage.getItem("favorites")
        ) || [];

        setFavorites(data);
    }, []);

    const removeFavorites = (id) => {
        const updated =
            favorites.filter(
                (movie) => movie.id !== id
            );

        setFavorites(updated);

        localStorage.setItem(
            "favorites",
            JSON.stringify(updated)
        );

        toast.success(
            "🗑️ Removed from favorites"
        );
    };

    return (
        <div className="favorite-page">
            <h1 className="favorites-title">
              ❤️My Favorite Movies  
            </h1>

            {favorites.length === 0 ? (
                <div className="empty-state">
                    <h2>💔No favorite movies yet</h2>
                    <p>
                        Start exploring and add some movies!
                    </p>
                </div>
            ) : (
                    <div className="favorites-grid">
                        {favorites.map((movie) => (
                            <div
                                className="favorites-card"
                                key={movie.id}
                            >
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                />

                                <div className="favorites-info">
                                    <h3>{movie.title}</h3>

                                    <p className="favorites-rating">
                                        ⭐ {movie.vote_average?.toFixed(1)} 
                                    </p>

                                    <button
                                        className="remove-btn"
                                        onClick={() =>
                                            removeFavorites(movie.id)
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
        </div>    
    );
}

export default Favorites;