import PlaylistsHome from "../../components/Playlist/PlaylistsHome";
import { usePlaylist } from "../../context/playlist/PlaylistContext";
import "./playlist.css";

const Playlist = () => {
  const { playlist } = usePlaylist();
  return (
    <div className="playlist-page-container">
      {playlist.length > 0 ? (
        <>
          <h2>Playlist</h2>
          <PlaylistsHome />
        </>
      ) : (
        <h2>Your playlist is empty!</h2>
      )}
    </div>
  );
};

export default Playlist;
