import React from 'react'
import "../Navbar.css"
import logo from '../../../assets/logo.webp';

;


const SideNavbarHeader = ({closeMobileNavbar}) => {
  
  return (
    <div className="sidenavbar-main">
        <div className="navbar-logo-mobile">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <button className="close-btn" onClick={closeMobileNavbar}>
          X
        </button>
      </div>
  )
}

export default SideNavbarHeader