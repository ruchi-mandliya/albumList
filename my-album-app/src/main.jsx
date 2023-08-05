import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AlbumProvider from "./contextApi/AddFunctionality.jsx";
import AlbumList from "./pages/AlbumList.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AlbumProvider>
    <Router>
      <App />
    </Router>
  </AlbumProvider>
);
