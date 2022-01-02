import "./history.css";
import { useUser } from "../../context/user/userContext";
import VideoCard from "../../components/VideoCard/VideoCard";
import Modal from "react-modal";
import { useState } from "react";

const History = () => {
  const { user, userDispatch, userActionTypes } = useUser();
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleClear = () => {
    userDispatch({
      type: userActionTypes.CLEAR_HISTORY,
      payload: null,
    });
    closeModal();
  };
  return (
    <div className="history-page-container">
      {user.history.length === 0 ? (
        <h2>watch something first :P</h2>
      ) : (
        <>
          <div className="history-page-title">
            <Modal
              ariaHideApp={false}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              className="history-modal"
            >
              <div className="history-modal-actions">
                <p style={{ color: "white" }}>Are you sure?</p>
                <div className="history-modal-actions-button">
                  <button
                    className="history-edit-button blue"
                    onClick={handleClear}
                  >
                    CLEAR
                  </button>
                  <button
                    className="playlist-edit-button gray"
                    onClick={closeModal}
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </Modal>
            <h2>Recently watched</h2>
            <span onClick={openModal}>Clear History</span>
          </div>

          <div className="history-page-list">
            {user.history.map((video) => {
              return <VideoCard video={video} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default History;
