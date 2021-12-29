import {
  ADD_TO_LIKED,
  REMOVE_FROM_LIKED,
  ADD_TO_HISTORY,
  CLEAR_HISTORY,
} from "./userActionTypes";
const addToLiked = (user, video) => {
  const userCopy = { ...user };
  userCopy.liked = [{ ...video }, ...userCopy.liked];
  console.log(userCopy.liked);
  localStorage.setItem("video-stream-app", JSON.stringify(userCopy));
  return userCopy;
};
const removeFromLiked = (user, video) => {
  const userCopy = { ...user };
  userCopy.liked = userCopy.liked.filter((item) => {
    return item.id !== video.id;
  });
  console.log(userCopy.liked);
  localStorage.setItem("video-stream-app", JSON.stringify(userCopy));
  return userCopy;
};

export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_LIKED: {
      return addToLiked(state, payload);
    }
    case REMOVE_FROM_LIKED: {
      return removeFromLiked(state, payload);
    }
    default:
      return state;
  }
};
