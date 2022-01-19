import "./liked-videos.css";
import { useUser } from "../../context/user/userContext";
import VideoCard from "../../components/VideoCard/VideoCard";

const LikedVideos = () => {
  const { user } = useUser();
  return (
    <div className="liked-page-container">
      {user.liked.length === 0 ? (
        <h2>Like something first :P</h2>
      ) : (
        <>
          <h2>Liked videos</h2>
          <div className="liked-page-list">
            {user.liked.map((video) => {
              return <VideoCard video={video} key={video.id} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default LikedVideos;
