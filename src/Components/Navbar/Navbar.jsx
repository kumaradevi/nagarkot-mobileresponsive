// eslint-disable-next-line no-unused-vars
import React, {   useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.webp';
import downArrow from '../../assets/down-arrow.webp';
import Form from '../Form/Form';
import SideNavbar from './SideNavbar/SideNavbar';



const Navbar = () => {
  // const{isFormOpen,closeForm,sideNavbarOpen,handleSideNavbar,openForm}=useContext(mobileHamburgerContext);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const[sideNavbarOpen,setSideNavbarOpen]=useState(false)
  const[show,setShow]=useState(true)
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  // Scroll listener to toggle sticky class
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
//to open side navbar
const handleSideNavbar=()=>{
  setSideNavbarOpen(!sideNavbarOpen)
  
}

// to close side navbar
const handleClose=()=>{
  setSideNavbarOpen(false)

}
  return (
    <>
      <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
        <div className="navbar-content">
          <div className="navbar-logo">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
           <div className="hamburger" onClick={handleSideNavbar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div> 
        </div>


        {/* Mobile Navbar Menu */}
        <ul className={`navbar-menu ${menuOpen ? 'show-menu' : ''}`}>
          <li className="navbar-item dropdown">
            <button className="dropdown-button">
              <a href='about-us'>ABOUT US</a> 
            </button>
          </li>

          <li className="navbar-item dropdown">
            <button className="dropdown-button">
              LOCATIONS <img src={downArrow} alt="Down Arrow" className="arrow-icon" />
            </button>
            <div className="dropdown-content">
              <a href="/locations/gurgaon">GURGAON</a>
              <a href="/locations/gujarat">AHMEDABAD</a>
              <a href="/locations/bhiwandi">BHIWANDI</a>
              <a href="/locations/bengaluru">BENGALURU</a>
              <a href="/locations/chennai">CHENNAI</a>
              <a href="/locations/delhi">DELHI</a>
              <a href="/locations/hyderabad">HYDERABAD</a>
              <a href="/locations/kolkata">KOLKATA</a>
              <a href="/locations/lucknow">LUCKNOW</a>
              <a href="/locations/mumbai">MUMBAI</a>
              <a href="/locations/pune">PUNE</a>
            </div>
          </li>

          <li className="navbar-item dropdown">
            <button className="dropdown-button">
              SOLUTIONS <img src={downArrow} alt="Down Arrow" className="arrow-icon" />
            </button>
            <div className="dropdown-content">
              <a href="/start-ups">STARTUPS</a>
              <a href="/msme">MSME</a>
              <a href="/enterprise">ENTERPRISE</a>
            </div>
          </li>

          <li className="navbar-item dropdown">
            <button className="dropdown-button">
              INDUSTRIES <img src={downArrow} alt="Down Arrow" className="arrow-icon" />
            </button>
            <div className="dropdown-content">
              <a href="/apparel-fashion">APPAREL FASHION</a>
              <a href="/automotive">AUTOMOTIVE</a>
              <a href="/electronics">ELECTRONICS</a>
              <a href="/energy">ENERGY</a>
              <a href="/food">FOOD AND BEVERAGES</a>
              <a href="/healthcare">HEALTHCARE</a>
              <a href="/retail">RETAIL</a>
              <a href="/white-goods">WHITE GOODS</a>
            </div>
          </li> 

          <li className="navbar-item dropdown">
            <button className="dropdown-button">
              RESOURCES <img src={downArrow} alt="Down Arrow" className="arrow-icon" />
            </button>
            <div className="dropdown-content">
              <a href="/blogs">BLOGS</a>
            </div>
          </li>

          <li className="navbar-item">
            <button className="btn" onClick={openForm}>CONTACT US</button>
          </li>
        </ul>
        {sideNavbarOpen &&  <div>
        <SideNavbar sideNavbarOpen={sideNavbarOpen} setSideNavbarOpen={setSideNavbarOpen} isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
       </div>}
      </nav>
      
      {/* Contact Form Modal */}
      {isFormOpen && <Form closeForm={closeForm} />}
    </>
  );
};

export default Navbar;
