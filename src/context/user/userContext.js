import { createContext, useReducer, useContext } from "react";
import * as userActionTypes from "./userActionTypes";
import { userReducer } from "./userReducer";
const UserContext = createContext();

let intialUser = JSON.parse(localStorage.getItem("video-stream-app")) || {
  liked: [],
  history: [],
};

export const UserContextProvider = ({ children }) => {
  const [user, userDispatch] = useReducer(userReducer, intialUser);
  return (
    <UserContext.Provider value={{ user, userDispatch, userActionTypes }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
