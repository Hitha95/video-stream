import { useParams, useNavigate } from "react-router-dom";
import { usePlaylist } from "../../context/playlist/PlaylistContext";
import VideoCard from "../VideoCard/VideoCard";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./playlist-item.css";
import Modal from "react-modal";
import { useState, useEffect } from "react";

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
      id: list.id,
    };
    playlistDispatch({
      type: playlistActionTypes.DELETE_PLAYLIST,
      payload: { details },
    });
    navigate("/playlist");
  };
  return (
    <div className="playlist-item-container">
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="playlist-edit-modal"
      >
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div>
            <button onClick={handleSave}>SAVE</button>
            <button onClick={handleDiscard}>DISCARD</button>
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
      <div>
        {list.videos &&
          list.videos.map((video) => {
            return <VideoCard video={video} />;
          })}
      </div>
    </div>
  );
};

export default PlaylistItem;
