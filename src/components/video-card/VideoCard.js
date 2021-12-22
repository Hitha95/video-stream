import "./video-card.css";
import { Link } from "react-router-dom";
const VideoCard = ({ video }) => {
  const { id, img, title, channelName, views, age, videoLink } = video;
  return (
    <Link to={`/${videoLink}`}>
      <div className="video-card-container">
        <img className="video-image" src={img} alt={title} />
        <div className="video-details">
          <p className="video-title">{title}</p>
          <p className="channel-name">{channelName}</p>
          <p className="video-stats">
            <span>
              {views} views • {age} ago
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
