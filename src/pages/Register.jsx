import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

function Register() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");

    const [email, setEmail] = useState("");
    
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        if (
            !username ||
            !email ||
            !password
        ){
            toast.error("Please fill all fields");
            return;
        }

        const user = {
            username,
            email,
            password,
        };

        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );

        toast.success("🎉 Registration successful!");

        setTimeout(() => {
            navigate("/login");
        }, 1500);
    };

    return (
        <div className="auth-page">

            <div className="auth-card">
                <h1 className="auth-title">
                    ✨Create Account
                </h1>

                <p className="auth-subtitle">
                    Join Flixora today
                </p>

                <form
                    className="auth-form"
                    onSubmit={handleRegister}
                >
        
                    <input
                        className="auth-input"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)
                        }
                    />

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
                        onChange={(e) => 
                            setPassword(e.target.value)
                        }
                    />

                    <button 
                        className="auth-btn"
                        type="submit"
                    >
                        Register
                    </button>

                    <p className="auth-link">
                        Already have an account?
                        <Link to="/login">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;