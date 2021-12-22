import { createContext, useContext } from "react";
import videos from "../../Data/videos.json";

const VideosContext = createContext();

/* let initialVideos = {
  liked: [],
  playlist: {
    playlistName: "finance",
    videos: [
      {
        id: 1,
        img: "https://i.ytimg.com/vi/L4anHNVN21E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBI0Q15506h7y5B-frOaO0ORZLDqg",
        title: "FOMO Marketing?",
        channelName: "Akshat Shrivastava",
        channelImage:
          "https://yt3.ggpht.com/VI0OvMwpPQPFGoHAQOHsvtEcFWg-_YzFBhoeohr2CRz1T21Ja4unTGte1Gz6TnDUgVX9wcOG=s176-c-k-c0x00ffffff-no-rj-mo",
        views: 10200,
        age: "6 months",
        videoLink: "L4anHNVN21E",
        likes: 3490,
      },
      {
        id: 8,
        img: "https://i.ytimg.com/vi/1VNr88Mviho/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5CEJ-XhD5fb4NdbfqJuORDAjJZw",
        title: "Buying this now!",
        channelName: "Akshat Shrivastava",
        channelImage:
          "https://yt3.ggpht.com/VI0OvMwpPQPFGoHAQOHsvtEcFWg-_YzFBhoeohr2CRz1T21Ja4unTGte1Gz6TnDUgVX9wcOG=s176-c-k-c0x00ffffff-no-rj-mo",
        views: 23200,
        age: "8 months",
        videoLink: "1VNr88Mviho",
        likes: 8790,
      },
    ],
  },
  watchHistory: [],
}; */

export const VideosContextProvider = ({ children }) => {
  return (
    <VideosContext.Provider value={videos}>{children}</VideosContext.Provider>
  );
};

export const useVideos = () => useContext(VideosContext);
