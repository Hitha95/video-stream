import { MdPlaylistAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import "./playlist-card.css";
const PlaylistCard = ({ item }) => {
  const { id, title, videos } = item;
  return (
    <div className="playlist-card-container">
      <Link to={`/playlist/${id}`}>
        <div className="playlist-card">
          {videos.length === 0 ? (
            <div className="empty-videos"></div>
          ) : (
            <img src={videos[0].img} alt="hello" />
          )}
          <div className="playlist-count">
            <MdPlaylistAdd />
            <p>{videos.length} videos</p>
          </div>
        </div>
      </Link>
      <div className="playlist-card-title">{title}</div>
    </div>
  );
};

export default PlaylistCard;
