import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css"

function Navbar() {
    const { isLoggedIn, logout } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <div className="logo">
                🍿Flixora
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/profile">Profile</Link>

                {!isLoggedIn ? (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                ) : (
                    <button
                        className="logout-btn"
                        onClick={logout}
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );      
}

export default Navbar;