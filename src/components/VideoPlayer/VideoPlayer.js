import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./video-player.css";
import VideoCard from "../VideoCard/VideoCard";
import { useUser } from "../../context/user/userContext";
import { useVideos } from "../../context/videos/VideosContext";
import { useParams } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { RiShareForwardFill } from "react-icons/ri";
import { MdPlaylistAdd } from "react-icons/md";
import Modal from "react-modal";
import PlaylistModal from "../Playlist/PlaylistModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VideoPlayer = (props) => {
  const isLoggedIn =
    JSON.parse(localStorage.getItem("video-stream-isLoggedIn")) || false;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const videos = useVideos();
  const navigate = useNavigate();
  const { videoLink } = useParams();
  const { user, userDispatch, userActionTypes } = useUser();
  let filteredList = [];
  let currentVideo = {};

  filteredList = videos.filter((video) => {
    return video.videoLink !== videoLink;
  });

  currentVideo = videos.find((video) => {
    return video.videoLink === videoLink;
  });

  const inLiked = user.liked.find((video) => {
    return video.id === currentVideo.id;
  });

  useEffect(() => {
    userDispatch({
      type: userActionTypes.ADD_TO_HISTORY,
      payload: { currentVideo },
    });
  }, []);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const handleLike = (video) => {
    isLoggedIn
      ? userDispatch({
          type: inLiked
            ? userActionTypes.REMOVE_FROM_LIKED
            : userActionTypes.ADD_TO_LIKED,
          payload: video,
        })
      : navigate("/login");
  };
  const copyToClipboard = () => {
    isLoggedIn
      ? navigator.clipboard.writeText(window.location.href).then(
          function () {
            toast.success("Copied to clipboard!", {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
            });
          },
          function (err) {
            toast("Failed to copy");
          }
        )
      : navigate("/login");
  };
  const handlePlaylist = () => {
    isLoggedIn ? openModal() : navigate("/login");
  };
  return (
    <div className="videoplayer-container">
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
      />
      <Modal
        ariaHideApp={false}
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <PlaylistModal closeModal={closeModal} currentVideo={currentVideo} />
      </Modal>
      <div className="videoplayer-left">
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
            className="videoplayer-channel-img"
            src={currentVideo.channelImage}
            alt={currentVideo.title}
          />
          <div className="videoplayer-details">
            <p className="videoplayer-title">{currentVideo.title}</p>
            <p className="videoplayer-channel-name">
              {currentVideo.channelName} • {currentVideo.views} views •{" "}
              {currentVideo.age} ago
            </p>
          </div>
          <div className="videoplayer-actions">
            <div
              className={inLiked ? "liked-blue" : ""}
              onClick={(video) => {
                handleLike(currentVideo);
              }}
            >
              <AiFillLike />
              {inLiked ? currentVideo.likes + 1 : currentVideo.likes}
            </div>
            <div onClick={copyToClipboard}>
              <RiShareForwardFill />
              SHARE
            </div>
            <div
              onClick={(video) => {
                handlePlaylist(currentVideo);
              }}
            >
              <MdPlaylistAdd />
              SAVE
            </div>
          </div>
        </div>
      </div>
      <div className="videoplayer-right">
        <h2> Up Next! </h2>
        {filteredList.map((video) => {
          return <VideoCard video={video} key={video.id} />;
        })}
      </div>
    </div>
  );
};

export default VideoPlayer;
