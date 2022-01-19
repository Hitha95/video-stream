import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("video-stream-isLoggedIn"))
  );
  const handleLogout = () => {
    setLoggedIn(false);
    JSON.stringify(localStorage.setItem("video-stream-isLoggedIn", false));
    navigate("/login");
  };
  return (
    <div className="header-container">
      <Link className="header-logo" to="/">
        Video-streamer
      </Link>
      {/* <Link className="header-actions" to="/login" onClick={handleLogout}>
        {loggedIn ? "LOGOUT" : "LOGIN"}
      </Link> */}
    </div>
  );
};

export default Header;
