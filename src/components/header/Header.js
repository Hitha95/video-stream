import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link className="header-logo" to="/">
        Video-streamer
      </Link>
      <Link className="header-actions" to="/login">
        Login
      </Link>
    </div>
  );
};

export default Header;
