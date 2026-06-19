import { useEffect, useState } from "react";

function Favorites() {
    const [favorites, setFavorites] =
        useState([]);

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
    };

    return (
        <div>
            <h1>Favorites Movies</h1>

            {favorites.length === 0 ? (
                <p>No favorite movies yet.</p>
            ) : (
                favorites.map((movie) => (
                    <div key={movie.id}>
                        <h3>{movie.title}</h3>

                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                        />

                        <br />

                        <button
                            onClick={() =>
                                removeFavorites(movie.id)
                            }
                        >
                            Remove    
                        </button>  

                        <hr />
                    </div>
                ))
            )}
        </div>
    );

}

export default Favorites;