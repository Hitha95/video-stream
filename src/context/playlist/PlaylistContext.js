import { createContext, useContext, useReducer } from "react";
import * as playlistActionTypes from "./playlistActionTypes";
import { playlistReducer } from "./playlistReducer";

const PlaylistContext = createContext();

let initialPlaylist =
  JSON.parse(localStorage.getItem("video-stream-app-playlist")) || [];

export const PlaylistContextProvider = ({ children }) => {
  const [playlist, playlistDispatch] = useReducer(
    playlistReducer,
    initialPlaylist
  );
  return (
    <PlaylistContext.Provider
      value={{ playlist, playlistActionTypes, playlistDispatch }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);
