import "./videos-list.css";
import VideoCard from "../VideoCard/VideoCard";
import { useVideos } from "../../context/videos/VideosContext";
import { Link } from "react-router-dom";
const VideosList = () => {
  const videos = useVideos();

  return (
    <div className="videos-list">
      {videos.map((video) => {
        return <VideoCard video={video} key={video.id} />;
      })}
    </div>
  );
};

export default VideosList;
