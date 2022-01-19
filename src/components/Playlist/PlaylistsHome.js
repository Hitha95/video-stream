import PlaylistsCard from "./PlaylistsCard";
import "./playlists-home.css";
import { usePlaylist } from "../../context/playlist/PlaylistContext";

const PlaylistsHome = () => {
  const { playlist } = usePlaylist();
  return (
    <div className="playlist-list">
      {playlist.map((item) => {
        return <PlaylistsCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default PlaylistsHome;
