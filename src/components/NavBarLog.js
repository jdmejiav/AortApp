import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../firebase/AuthContext";

function NavBarLog() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/");
    } catch {}
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          AortApp <i class="fas fa-heartbeat"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Página principal
            </Link>
          </li>
          <li>
          </li>
          <li className="nav-item">
            <Link className="nav-links" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBarLog;
