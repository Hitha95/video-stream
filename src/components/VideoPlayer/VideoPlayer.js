import { useState } from "react";
import "./video-player.css";
import videos from "../../Data/videos.json";
import VideoCard from "../VideoCard/VideoCard";
import { useParams } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { RiShareForwardFill } from "react-icons/ri";
import { MdPlaylistAdd } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useUser } from "../../context/user/userContext";
import Modal from "react-modal";
import PlaylistModal from "../Playlist/PlaylistModal";

const VideoPlayer = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { videoLink } = useParams();
  const { user, userDispatch, userActionTypes } = useUser();
  let filteredList = [];
  let currentVideo = {};
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  filteredList = videos.filter((video) => {
    return video.videoLink !== videoLink;
  });
  currentVideo = videos.find((video) => {
    return video.videoLink === videoLink;
  });
  const inLiked = user.liked.find((video) => {
    return video.id === currentVideo.id;
  });
  const handleLike = (video) => {
    //console.log("handleLike", video);
    userDispatch({
      type: inLiked
        ? userActionTypes.REMOVE_FROM_LIKED
        : userActionTypes.ADD_TO_LIKED,
      payload: video,
    });
  };
  const handlePlaylist = (video) => {
    openModal();
  };
  return (
    <div className="video-player-container">
      <Modal
        ariaHideApp={false}
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <PlaylistModal closeModal={closeModal} currentVideo={currentVideo} />
      </Modal>
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
            <p className="video-title">{currentVideo.title}</p>
            <p className="videoplayer-channel-name">
              {currentVideo.channelName} • {currentVideo.views} views •{" "}
              {currentVideo.age} ago
            </p>
          </div>
          <div className="videoplayer-actions">
            <div
              className={
                inLiked ? "video-player-liked blue" : "video-player-liked "
              }
              onClick={(video) => {
                handleLike(currentVideo);
              }}
            >
              <AiFillLike />
              {currentVideo.likes}
            </div>
            <div>
              <CopyToClipboard text={window.location.href}>
                <RiShareForwardFill />
              </CopyToClipboard>
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
