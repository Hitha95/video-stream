import * as playlistActionTypes from "./playlistActionTypes";

const createPlaylist = (playlist, { details }) => {
  let copy = playlist;
  copy = copy.concat({ ...details });
  localStorage.setItem("video-stream-app-playlist", JSON.stringify(copy));
  return copy;
};
const addToPlaylist = (playlist, details) => {
  let copy = playlist;
  copy = copy.map((item) => {
    if (item.id === details.id) {
      let current = item.videos.find((vid) => {
        return vid.id === details.videos[0].id;
      });
      console.log("repeated vidro", current);
      let currentIndex = item.videos.indexOf(current);
      console.log("inxed", currentIndex);
      if (currentIndex === -1) {
        return {
          id: item.id,
          title: item.title,
          videos: [...details.videos, ...item.videos],
        };
      } else {
        item.videos.splice(currentIndex, 1);
        console.log("repeated", item);
        return {
          id: item.id,
          title: item.title,
          videos: [...details.videos, ...item.videos],
        };
        // return { ...item, videos: [{ ...details.videos }, ...item.videos] };
      }
    } else {
      return item;
    }
  });
  localStorage.setItem("video-stream-app-playlist", JSON.stringify(copy));
  return copy;
};

const renamePlaylist = (playlist, { details }) => {
  let copy = playlist;
  copy = copy.map((item) => {
    if (item.id === details.id) {
      return { ...item, title: details.title };
    } else {
      return item;
    }
  });
  localStorage.setItem("video-stream-app-playlist", JSON.stringify(copy));
  return copy;
};

const deletePlaylist = (playlist, { details }) => {
  let copy = playlist;
  copy = copy.filter((item) => {
    return item.id !== details.id;
  });
  localStorage.setItem("video-stream-app-playlist", JSON.stringify(copy));
  return copy;
};

const removeFromPlaylist = (playlist, { details }) => {
  let copy = playlist;
  /*   console.log(details);
    let current = copy.find((item) => {
    return item.id === details.id;
  });
  copy = copy.map((item) => {
    if (current.id === item.id) {
      current.videos = current.videos.filter((video) => {
        return video.id !== details.video.id;
      });
      return current;
    } else {
      return item;
    }
  }); */

  copy = copy.map((item) => {
    if (item.id !== details.id) {
      return item;
    } else {
      item.videos = item.videos.filter((video) => {
        return video.id !== details.video.id;
      });
      if (item.videos.length === 0) {
        details.navigate("/playlist");
        return null;
      } else {
        return item;
      }
    }
  });
  copy = copy.filter((item) => {
    return item !== null;
  });

  console.log(copy);
  localStorage.setItem("video-stream-app-playlist", JSON.stringify(copy));
  return copy;
};

export const playlistReducer = (state, { type, payload }) => {
  switch (type) {
    case playlistActionTypes.CREATE_PLAYLIST: {
      return createPlaylist(state, payload);
    }
    case playlistActionTypes.ADD_TO_PLAYLIST: {
      return addToPlaylist(state, payload);
    }
    case playlistActionTypes.RENAME_PLAYLIST: {
      return renamePlaylist(state, payload);
    }
    case playlistActionTypes.DELETE_PLAYLIST: {
      return deletePlaylist(state, payload);
    }
    case playlistActionTypes.REMOVE_FROM_PLAYLIST: {
      return removeFromPlaylist(state, payload);
    }
    default:
      return state;
  }
};
