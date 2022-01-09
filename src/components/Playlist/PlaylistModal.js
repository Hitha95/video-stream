import "./playlist-modal.css";
import { usePlaylist } from "../../context/playlist/PlaylistContext";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlaylistModal = ({ closeModal, currentVideo }) => {
  const { playlist, playlistActionTypes, playlistDispatch } = usePlaylist();
  const [newPlaylist, setNewPlaylist] = useState("");
  const [selected, setSelected] = useState({});
  const handlePlaylist = (e, playlist) => {
    console.log(playlist);
    console.log(selected);

    setSelected(playlist);

    /*  let value = e.target.value;
    console.log()
    let list = playlist.find((item) => {
      return item.id === value;
    });
    setSelected({ ...playlist });
    console.log(selected);
    console.log(value); */
  };
  const handleCreate = () => {
    if (newPlaylist === "") {
      alert("name cant be blank");
    } else {
      setSelected({});
      let details = {
        id: uuidv4(),
        title: newPlaylist,
        videos: [currentVideo],
      };
      playlistDispatch({
        type: playlistActionTypes.CREATE_PLAYLIST,
        payload: { details },
      });
      setNewPlaylist("");
      toast.success("Created new playlist!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      closeModal();
    }
  };
  const handleSave = () => {
    if (typeof selected === "object" && Object.keys(selected).length === 0) {
      alert("Choose a playlist or create one!");
    } else {
      console.log(typeof selected);
      console.log(selected == null);
      console.log(Object.keys(selected).length === 0);
      let details = {
        id: selected.id,
        title: selected.title,
        videos: [currentVideo],
      };
      playlistDispatch({
        type: playlistActionTypes.ADD_TO_PLAYLIST,
        payload: details,
      });
      setNewPlaylist("");
      toast.success("Added to playlist!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      closeModal();
    }
  };
  return (
    <div className="playlist-modal-container">
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
      <div className="playlist-header">
        <h2>Playlist</h2>
        <AiOutlineClose onClick={closeModal} />
      </div>
      <hr />
      {playlist && playlist.length ? (
        <>
          <div className="modal-list">
            {playlist.map((item, i) => {
              return (
                <label>
                  <input
                    name="playlistRadio"
                    type="radio"
                    value={item.id}
                    onChange={(e) => handlePlaylist(e, item)}
                  />
                  {item.title}
                </label>
              );
            })}
          </div>{" "}
          <div className="modal-save">
            <button onClick={handleSave} disabled={selected === ""}>
              SAVE
            </button>
          </div>
          <h6>OR</h6>
        </>
      ) : null}

      <div className="modal-create">
        <span>CREATE NEW</span>
        <input
          type="text"
          value={newPlaylist}
          onChange={(e) => {
            setNewPlaylist(e.target.value);
          }}
        />
      </div>
      <div className="modal-save">
        <button style={{ marginBottom: "10px" }} onClick={handleCreate}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default PlaylistModal;
