import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdPlaylistAdd } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { BiLike } from "react-icons/bi";

const Navbar = () => {
  const location = useLocation();
  let activeLink = location.pathname.substring(1);
  return (
    <div className="navbar-container">
      <Link to="/">
        <div className={activeLink === "" ? "nav-items active" : "nav-items"}>
          <IoHomeOutline />
          <span>Home</span>
        </div>
      </Link>
      <Link to="/playlist">
        <div
          className={
            activeLink === "playlist" ? "nav-items active" : "nav-items"
          }
        >
          <MdPlaylistAdd />
          <span>Playlist</span>
        </div>
      </Link>
      <Link to="/history">
        <div
          className={
            activeLink === "history" ? "nav-items active" : "nav-items"
          }
        >
          <BsClockHistory />
          <span>History</span>
        </div>
      </Link>
      <Link to="/liked-videos">
        <div
          className={
            activeLink === "liked-videos" ? "nav-items active" : "nav-items"
          }
        >
          <BiLike />
          <span>Liked Videos</span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
