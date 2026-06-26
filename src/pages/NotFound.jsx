import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
        <div className="notfound-page">
            <h1 className="notfound-code">404</h1>
            <h2 className="notfound-title">
                Page Not Found
            </h2>

            <p className="notfound-text">
                Oops! The page you're looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="home-btn"
            >
                🏠 Back to Home
            </Link>
        </div>
    );
}

export default NotFound;