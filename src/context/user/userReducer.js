import * as userActionTypes from "./userActionTypes";

const addToLiked = (user, video) => {
  const userCopy = { ...user };

  userCopy.liked = [{ ...video }, ...userCopy.liked];
  userCopy.liked = userCopy.liked.map((item) => {
    if (item.id !== video.id) {
      return item;
    } else {
      item.likes = item.likes + 1;
      return { ...item };
    }
  });
  localStorage.setItem("video-stream-app", JSON.stringify(userCopy));
  return userCopy;
};

const removeFromLiked = (user, video) => {
  const userCopy = { ...user };
  userCopy.liked = userCopy.liked.map((item) => {
    if (item.id !== video.id) {
      return item;
    } else {
      item.likes = item.likes - 1;
      return { ...item };
    }
  });
  userCopy.liked = userCopy.liked.filter((item) => {
    return item.id !== video.id;
  });
  localStorage.setItem("video-stream-app", JSON.stringify(userCopy));
  return userCopy;
};

const addToHistory = (user, { currentVideo }) => {
  let userCopy = { ...user };
  let index = userCopy.history.find((item) => {
    return item.id === currentVideo.id;
  });
  let currentIndex = userCopy.history.indexOf(index);
  if (currentIndex === -1) {
    userCopy.history = [{ ...currentVideo }, ...userCopy.history];
  }

  localStorage.setItem("video-stream-app", JSON.stringify(userCopy));
  return userCopy;
};

const clearHistory = (user) => {
  let userCopy = { ...user };
  userCopy.history = [];
  localStorage.setItem("video-stream-app", JSON.stringify(userCopy));
  return userCopy;
};

export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case userActionTypes.ADD_TO_LIKED: {
      return addToLiked(state, payload);
    }
    case userActionTypes.REMOVE_FROM_LIKED: {
      return removeFromLiked(state, payload);
    }
    case userActionTypes.ADD_TO_HISTORY: {
      return addToHistory(state, payload);
    }
    case userActionTypes.CLEAR_HISTORY: {
      return clearHistory(state);
    }
    default:
      return state;
  }
};
