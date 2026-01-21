import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Optional: Import CSS globally
import "./index.css"; 

// React 18+ way to render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
