import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import "./Login.css";

function Login() {
    const navigate = useNavigate();

    const { login } =
      useContext(AuthContext);

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const user = JSON.parse(
            localStorage.getItem("user")
        );
        
        if (
            user &&
            email === user.email &&
            password === user.password
        ) {
           localStorage.setItem(
                "currentUser",
                JSON.stringify(user)
           );

           login();

           toast.success("🎉 Login successful!");
           
           setTimeout(() => {
            navigate("/")
           }, 1500);
    
        } else {
            toast.error("Invalid email or password!");
        }
    };

    return (
        <div className="auth-page">

            <div className="auth-card">
                <h1 className="auth-title">
                    🍿Welcome Back
                </h1>

                <p className="auth-subtitle">
                    Login to continue exploring movies
                </p>

                <form 
                    className="auth-form"
                    onSubmit={handleLogin}
                >

                    <input 
                        className="auth-input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <input
                        className="auth-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)
                        }
                    />

                    <button 
                        className="auth-btn"
                        type="submit"
                    >
                        Login
                    </button>

                    <p className="auth-link">
                        Don't have an account?
                        <Link to="/register">
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
export default Login;