import { createContext, useContext } from "react";
import videos from "../../Data/videos.json";

const VideosContext = createContext();

export const VideosContextProvider = ({ children }) => {
  return (
    <VideosContext.Provider value={videos}>{children}</VideosContext.Provider>
  );
};

export const useVideos = () => useContext(VideosContext);
