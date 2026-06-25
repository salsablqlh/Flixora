import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import "./styles/app.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <AuthProvider>
      <App />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
      />
    </AuthProvider>
  </React.StrictMode>
);