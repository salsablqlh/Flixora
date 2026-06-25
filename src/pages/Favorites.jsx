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

        toast.info(
            "🗑️ Removed from favorites"
        );
    };

    return (
        <div className="favorites-page">
            <h1 className="favorites-title">
              ❤️ My Favorite Movies  
            </h1>

            <div className="favorites-grid">
                {favorites.map((movie) => (
                    <div
                      className="favorite-card"
                      key={movie.id}
                    >
                        <img 
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                        />

                        <div className="favorite-info">
                            <h3>{movie.title}</h3>

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
        </div>
    );
}

export default Favorites;