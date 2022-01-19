import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Playlist from "./pages/Playlist/Playlist";
import History from "./pages/History/History";
import LikedVideos from "./pages/LikedVideos/LikedVideos";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import PlaylistItem from "./components/Playlist/PlaylistItem";

const AllRoutes = () => {
  function PrivateRoute({ children }) {
    const auth =
      JSON.parse(localStorage.getItem("video-stream-isLoggedIn")) || "";
    return auth ? children : <Navigate to="/login" />;
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/playlist"
        element={
          <PrivateRoute>
            <Playlist />
          </PrivateRoute>
        }
      />

      <Route
        path="/history"
        element={
          <PrivateRoute>
            <History />
          </PrivateRoute>
        }
      />
      <Route
        path="/liked-videos"
        element={
          <PrivateRoute>
            <LikedVideos />
          </PrivateRoute>
        }
      />
      <Route path="/playlist/:id" element={<PlaylistItem />} />
      <Route path=":videoLink" element={<VideoPlayer />} />
      {/* <Route path="playlist" element={<Playlist />}></Route> 
      <Route path="history" element={<History />} />
      <Route path="liked-videos" element={<LikedVideos />} />*/}
    </Routes>
  );
};

export default AllRoutes;
