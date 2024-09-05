import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./App.jsx";
//import UserCard from "./UserCard.jsx";
//import "./css/Card.css";
//import "./css/NewApp.css";
import Login from "./Login.jsx";
import "./css/Login.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Login />
  </StrictMode>
);
