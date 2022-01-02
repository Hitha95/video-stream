import { Route, useNavigate, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Playlist from "./pages/Playlist/Playlist";
import History from "./pages/History/History";
import LikedVideos from "./pages/LikedVideos/LikedVideos";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import PlaylistItem from "./components/Playlist/PlaylistItem";

/* const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn =
    JSON.parse(localStorage.getItem("video-stream-isLoggedIn")) || false;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isLoggedIn =
    JSON.parse(localStorage.getItem("video-stream-isLoggedIn")) || false;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Navigate to="/" /> : <Component {...props} />
      }
    />
  );
}; */

const PrivateRoute = ({ component: Component }) => {
  const Navigate = useNavigate();
  const isLoggedIn =
    JSON.parse(localStorage.getItem("video-stream-isLoggedIn")) || false;
  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
};

const AllRoutes = () => {
  return (
    <Routes>
      {/* <PublicRoute component={Home} path="/" exact />
      <PublicRoute component={Login} path="/login" exact />
      <PublicRoute component={SignUp} path="/signup" exact /> */}
      <Route path="/" element={<Home />} exact />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} exact />
      <Route path="playlist" element={<PrivateRoute component={Playlist} />} />
      <Route
        path="playlist/:id"
        element={<PrivateRoute component={PlaylistItem} />}
      />
      <Route path="history" element={<PrivateRoute component={History} />} />
      <Route
        path="liked-videos"
        element={<PrivateRoute component={LikedVideos} />}
      />
      <Route
        path=":videoLink"
        element={<PrivateRoute component={VideoPlayer} />}
      />
      {/* <Route exact path="/playlist" element={<PrivateRoute />}>
        <Route exact path="/playlist" element={<Playlist />} />
      </Route>
      <Route exact path="/playlist/:id" element={<PrivateRoute />}>
        <Route exact path="/playlist/:id" element={<PlaylistItem />} />
      </Route>
      <Route exact path="/history" element={<PrivateRoute />}>
        <Route exact path="/history" element={<History />} />
      </Route>
      <Route exact path="/liked-videos" element={<PrivateRoute />}>
        <Route exact path="/liked-videos" element={<VideoPlayer />} />
      </Route>
      <Route exact path="/:videoLink" element={<PrivateRoute />}>
        <Route exact path="/:videoLink" element={<VideoPlayer />} />
      </Route> */}
      {/* <PrivateRoute path="/playlist" component={Playlist} exact />
      <PrivateRoute path="/playlist/:id" component={<PlaylistItem />} exact />
      <PrivateRoute path="/history" component={<History />} exact />
      <PrivateRoute path="/liked-videos" component={<LikedVideos />} exact />
      <PrivateRoute path="/:videoLink" component={<VideoPlayer />} exact /> */}
    </Routes>
  );
};

export default AllRoutes;
