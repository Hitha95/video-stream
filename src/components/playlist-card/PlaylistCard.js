import { MdPlaylistAdd } from "react-icons/md";
import "./playlist-card.css";
import { usePlaylist } from "../../context/playlist/PlaylistContext";
const PlaylistCard = () => {
  const { playlist } = usePlaylist();
  console.log(playlist);
  return (
    // {
    //   playlist.map((item)=>{
    //     return(
    //       <div className="playlist-card">
    //       <img
    //         src={item.videos[0].img}
    //         alt="hello"
    //       />
    //       <div className="playlist-count">
    //         <MdPlaylistAdd />
    //         <p>count videos</p>
    //       </div>
    //     </div>
    //     )
    //   })
    // }
    <h2>hey</h2>
  );
};

export default PlaylistCard;
