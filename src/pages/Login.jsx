import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Login() {
    const navigate = useNavigate();

    const { login } =
      useContext(AuthContext);

    const [username, setUsername] =
      useState("");

    const [password, setPassword] =
      useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const user = JSON.parse(
            localStorage.getItem("user")
        );
        
        if (
            user &&
            username === user.username &&
            password === user.password
        ) {
            login();
            alert("Login berhasil");
            navigate("/");
        } else {
            alert("Username atau password salah");
        }
    };

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleLogin}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)
                  }
                />

                <br />
                <br />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)
                  }
                />

                <br />
                <br />

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );

}
export default Login;