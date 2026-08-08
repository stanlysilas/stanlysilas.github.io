import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemeProvider from "./context/ThemeContext";

const redirect = sessionStorage.redirect;

if (redirect) {
  delete sessionStorage.redirect;
  window.history.replaceState(null, null, redirect);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
