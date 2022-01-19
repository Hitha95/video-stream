import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Playlist from "./pages/Playlist/Playlist";
import History from "./pages/History/History";
import LikedVideos from "./pages/LikedVideos/LikedVideos";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import PlaylistItem from "./components/Playlist/PlaylistItem";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="playlist" element={<Playlist />}></Route>
      <Route path="/playlist/:id" element={<PlaylistItem />} />
      <Route path="history" element={<History />} />
      <Route path="liked-videos" element={<LikedVideos />} />
      <Route path=":videoLink" element={<VideoPlayer />} />
    </Routes>
  );
};

export default AllRoutes;
