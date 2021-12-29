import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { VideosContextProvider } from "./context/videos/VideosContext";
import { PlaylistContextProvider } from "./context/playlist/PlaylistContext";
import { UserContextProvider } from "./context/user/userContext";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <VideosContextProvider>
          <PlaylistContextProvider>
            <App />
          </PlaylistContextProvider>
        </VideosContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
