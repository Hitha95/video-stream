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

const deleteOnePlaylist = (playlists, details) => {
  let playlistsCopy = playlists;
  playlistsCopy = playlistsCopy.filter((item) => {
    return item.id !== details.playlistId;
  });
  localStorage.setItem(
    "video-stream-app-playlist",
    JSON.stringify(playlistsCopy)
  );
  return playlistsCopy;
};

const removeFromPlaylist = (playlists, details) => {
  let playlistsCopy = playlists;

  console.log({ details, playlists });
  let currentPlaylist = playlistsCopy.find((playlist) => {
    return playlist.id === details.playlistId;
  });
  currentPlaylist.videos = currentPlaylist.videos.filter((video) => {
    return video.id !== details.videoId;
  });

  playlistsCopy = playlistsCopy.map((playlist) => {
    if (playlist.id === currentPlaylist.id) {
      return currentPlaylist;
    } else return playlist;
  });

  localStorage.setItem(
    "video-stream-app-playlist",
    JSON.stringify(playlistsCopy)
  );

  return playlistsCopy;
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
    case playlistActionTypes.DELETE_ONE_PLAYLIST: {
      return deleteOnePlaylist(state, payload);
    }
    case playlistActionTypes.REMOVE_FROM_PLAYLIST: {
      return removeFromPlaylist(state, payload);
    }
    default:
      return state;
  }
};
