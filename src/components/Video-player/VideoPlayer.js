import "./video-player.css";
import videos from "../../Data/videos.json";
import VideoCard from "../Video-card/VideoCard";
import { useParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardFill } from "react-icons/ri";
import { MdPlaylistAdd } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";

const VideoPlayer = (props) => {
  const { videoLink } = useParams();
  let filteredList = [];
  let currentVideo = {};
  //useEffect(() => {
  filteredList = videos.filter((video) => {
    return video.videoLink !== videoLink;
  });
  currentVideo = videos.find((video) => {
    return video.videoLink === videoLink;
  });
  //}, []);

  console.log(filteredList);
  console.log(currentVideo);
  return (
    <div className="video-player-container">
      <div className="player-left">
        <iframe
          className="iframe-video"
          src={`https://www.youtube.com/embed/${videoLink}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
        <div className="videoplayer-info">
          <img
            className="img-channel"
            src={currentVideo.channelImage}
            alt={currentVideo.title}
          />
          <div className="video-details videoplayer-details">
            <p className=" video-title">{currentVideo.title}</p>
            <p className="videoplayer-channel-name">
              {currentVideo.channelName} • {currentVideo.views} views •{" "}
              {currentVideo.age} ago
            </p>
          </div>
          <div className="videoplayer-actions">
            <div>
              <AiOutlineLike />
              {currentVideo.likes}
            </div>
            <div>
              <CopyToClipboard text={window.location.href}>
                <RiShareForwardFill />
              </CopyToClipboard>
              SHARE
            </div>
            <div>
              <MdPlaylistAdd />
              SAVE
            </div>
          </div>
        </div>
      </div>
      <div className="player-right">
        <h2> Up Next! </h2>
        {filteredList.map((video) => {
          return <VideoCard video={video} key={video.id} />;
        })}
      </div>
    </div>
  );
};

export default VideoPlayer;
