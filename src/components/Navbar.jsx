import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
    const { isLoggedIn, logout } = useContext(AuthContext);

    return (
        <nav
           style={{
             display: "flex",
             gap: "15px",
             padding: "15px",
             backgroundColor: "#222",
           }}
        >
            <Link to="/" style={{ color: "white" }}>
                Home
            </Link>

            <Link to="/movies" style={{ color: "white" }}>
                Movies
            </Link>

            <Link to="/favorites" style={{ color: "white" }}>
                Favorites
            </Link>

            <Link to="/profile" style={{ color: "white" }}>
                Profile
            </Link>

            <Link to="/login" style={{ color: "white" }}>
                Login
            </Link>

            <Link to="/register" style={{ color: "white" }}>
                Register
            </Link>

            {isLoggedIn && (
                <button onClick={logout}>
                    Logout
                </button>
            )}
        </nav>
    );
}

export default Navbar;