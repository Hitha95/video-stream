import "./history.css";
import { useUser } from "../../context/user/userContext";
import VideoCard from "../../components/VideoCard/VideoCard";

const History = () => {
  const { user } = useUser();
  return (
    <div className="history-container">
      {user.history.length === 0 ? (
        <h1>Like something first :P</h1>
      ) : (
        user.history.map((video) => {
          return <VideoCard video={video} />;
        })
      )}
    </div>
  );
};

export default History;
