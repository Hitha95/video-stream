import React, { useEffect, useState } from "react";
import config from "./config";
import "firebase/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // config.auth().onAuthStateChanged(setUser);
    console.log("hello");
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
