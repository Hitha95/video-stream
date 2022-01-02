import * as userActionTypes from "./userActionTypes";

/* const signUp = (user, { formData }) => {
  const userCopy = { ...user };
  userCopy.userDetails = userCopy.userDetails.concat(formData);
  console.log(userCopy);
  return userCopy;
};

const login = (user, { details }) => {
  const userCopy = { ...user };

  return userCopy;
};
const logout = (user, { details }) => {
  const userCopy = { ...user };

  return userCopy;
};
 */
const addToLiked = (user, video) => {
  const userCopy = { ...user };
  userCopy.liked = [{ ...video }, ...userCopy.liked];
  localStorage.setItem("video-stream-app", JSON.stringify(userCopy));
  return userCopy;
};

const removeFromLiked = (user, video) => {
  const userCopy = { ...user };
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

const clearHistory = (user, payload) => {
  let userCopy = { ...user };
  userCopy.history = [];
  localStorage.setItem("video-stream-app", JSON.stringify(userCopy));
  return userCopy;
};

export const userReducer = (state, { type, payload }) => {
  switch (type) {
    /*  case userActionTypes.SIGN_UP: {
      return signUp(state, payload);
    }
    case userActionTypes.LOGIN: {
      return login(state, payload);
    }
    case userActionTypes.LOGOUT: {
      return logout(state, payload);
    } */
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
      return clearHistory(state, payload);
    }
    default:
      return state;
  }
};
