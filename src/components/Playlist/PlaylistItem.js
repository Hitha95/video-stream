import { useParams, useNavigate } from "react-router-dom";
import { usePlaylist } from "../../context/playlist/PlaylistContext";
import VideoCard from "../VideoCard/VideoCard";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./playlist-item.css";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";

const PlaylistItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { playlist, playlistActionTypes, playlistDispatch } = usePlaylist();
  const [name, setName] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  let list;
  if (playlist.length !== 0) {
    list = playlist.find((item) => {
      return item.id === id;
    });
  }
  useEffect(() => {
    setName(list.title);
  }, []);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleSave = () => {
    if (name.trim().length === 0) {
      alert("enter name for your playlist");
    } else {
      let details = {
        id: list.id,
        title: name,
      };
      playlistDispatch({
        type: playlistActionTypes.RENAME_PLAYLIST,
        payload: { details },
      });
      closeModal();
    }
  };
  const handleDiscard = () => {
    closeModal();
    setName(list.title);
  };
  const handleDelete = () => {
    let details = {
      playlistId: list.id,
    };
    playlistDispatch({
      type: playlistActionTypes.DELETE_ONE_PLAYLIST,
      payload: details,
    });
    navigate("/playlist");
  };

  const handleRemove = (video) => {
    let details = {
      playlistId: list.id,
      videoId: video.id,
      // navigate: navigate,
    };
    playlistDispatch({
      type: playlistActionTypes.REMOVE_FROM_PLAYLIST,
      payload: details,
    });
  };

  return (
    <div className="playlist-item-container">
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="playlist-edit-modal"
      >
        <div className="playlist-modal-actions">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div className="playlist-modal-actions-button">
            <button className="playlist-edit-button blue" onClick={handleSave}>
              SAVE
            </button>
            <button
              className="playlist-edit-button gray"
              onClick={handleDiscard}
            >
              DISCARD
            </button>
          </div>
        </div>
      </Modal>
      <div className="playlist-item-title">
        {list.title}
        <div className="playlist-item-actions">
          <AiFillEdit onClick={openModal} />
          <AiFillDelete onClick={handleDelete} />
        </div>
      </div>
      <div className="playlist-item-list">
        {list.videos &&
          list.videos.map((video) => {
            return (
              <div
                className="playlist-item-listitem"
                style={{ position: "relative" }}
              >
                <VideoCard video={video} />
                <ImCancelCircle
                  className="playlist-item-cancel"
                  onClick={() => {
                    handleRemove(video);
                  }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PlaylistItem;
