import React, { useState } from 'react';
import { Button } from './button';
import { Link,useHistory } from 'react-router-dom';
import { useAuth } from "../firebase/AuthContext";
import './Navbar.css';
import Dropdown from './dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const { currentUser, logout } = useAuth();
  const history = useHistory();


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogout = async () => {
    try {
      await logout();
      history.push("/");
    } catch {}
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          ArteriApp
          <i class="fas fa-heartbeat"></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Pagina Principal
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Juegos <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
          <Link className="nav-links" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;