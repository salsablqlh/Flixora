import { useState } from "react";
import {useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [username, setUsername] =
      useState("");
    
    const [password, setPassword] =
      useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        const user = {
            username,
            password,
        };

        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );

        alert("Register berhasil!");

        navigate("/login");
    };

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={handleRegister}>
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
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;