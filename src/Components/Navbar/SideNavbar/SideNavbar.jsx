import React from "react";
import "../Navbar.css";
import { Link } from "react-router-dom";

import SideNavbarHeader from "./SideNavbarHeader";




const SideNavbar = ({setSideNavbarOpen,isFormOpen,setIsFormOpen}) => {


  const closeMobileNavbar = () => {
    setSideNavbarOpen(false);
  };
  
  //to open form
  const openForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <div className="sidenavbar-container">
     
      <SideNavbarHeader closeMobileNavbar={closeMobileNavbar}/>
      <p className="breadcrumbs">Home</p>
      <nav className="sidenavbar-list">
        <ul>
          <Link to="/about-us">
            <li>About Us</li>
          </Link>
          <Link to="/location">
            <li> Locations </li>{" "}
          </Link>

          <Link to="/industry">
            <li> Indutries </li>{" "}
          </Link>
          <Link to="/solution">
            <li> Solutions </li>{" "}
          </Link>
         

          <Link to="/blogs-menu">
            <li>Resources </li>
          </Link>
         
          
          <li onClick={openForm}>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
