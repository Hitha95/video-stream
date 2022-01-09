//import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import "firebase/auth";

const config = initializeApp({
  apiKey: "AIzaSyAIbS5zZ-EAuoX7ZhCOflRI0_WPClYopXE",
  authDomain: "video-streamer-ff913.firebaseapp.com",
  databaseURL: "https://video-streamer-ff913-default-rtdb.firebaseio.com",
  projectId: "video-streamer-ff913",
  storageBucket: "video-streamer-ff913.appspot.com",
  messagingSenderId: "656309394442",
  appId: "1:656309394442:web:5e4e7f2f272c37f36853f3",
  measurementId: "G-VLLTVC3XRJ",
});

export default config;
