import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { VideosContextProvider } from "./context/videos/VideosContext";
import { PlaylistContextProvider } from "./context/playlist/PlaylistContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideosContextProvider>
        {/* <PlaylistContextProvider> */}
        <App />
        {/* </PlaylistContextProvider> */}
      </VideosContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
