import React, { useState } from "react";
import {Button} from './button'
import { Link } from "react-router-dom";
import "./Navbar.css";




function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          AortApp  <i class="fas fa-heartbeat"></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Página principal
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/login '
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Ingreso
            </Link>
          </li>
          <li>
            <Link
              to='/signup'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Registro
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default NavBar;
