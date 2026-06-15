import { Link } from "react-router-dom";

function Navbar() {
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
        </nav>
    );
}

export default Navbar;