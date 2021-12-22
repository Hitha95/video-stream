import "./navbar.css";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdPlaylistAdd } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { BiLike } from "react-icons/bi";

const Navbar = () => {
  return (
    <aside className="navbar-container">
      <Link to="/">
        <div className="nav-items">
          <IoHomeOutline />
          <span>Home</span>
        </div>
      </Link>
      <Link to="/playlist">
        <div className="nav-items">
          <MdPlaylistAdd />
          <span>Playlist</span>
        </div>
      </Link>
      <Link to="/history">
        <div className="nav-items">
          <BsClockHistory />
          <span>History</span>
        </div>
      </Link>
      <Link to="/liked-videos">
        <div className="nav-items">
          <BiLike />
          <span>Liked Videos</span>
        </div>
      </Link>
    </aside>
  );
};

export default Navbar;
