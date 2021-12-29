import PlaylistCard from "./PlaylistCard";
import "./playlist-home.css";
import { usePlaylist } from "../../context/playlist/PlaylistContext";
import { useState } from "react";

const PlaylistHome = () => {
  const { playlist } = usePlaylist();
  return (
    <div className="playlist-list">
      {playlist.map((item) => {
        return <PlaylistCard item={item} />;
      })}
    </div>
  );
};

export default PlaylistHome;
