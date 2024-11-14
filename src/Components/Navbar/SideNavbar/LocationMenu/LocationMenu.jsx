import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Navbar'
import "./LocationMenu.css"
import SideNavbarHeader from '../SideNavbarHeader'



const LocationMenu = () => {
  const navigate=useNavigate();

  const closeMobileNavbar=()=>{
    navigate(-1)

  }
  return (
    <>
 
    <div className='locations-container'>
      <SideNavbarHeader closeMobileNavbar={closeMobileNavbar}/>
       <p className="breadcrumbs"><Link to='/'>Home</Link> / Locations</p>
         <ul className='locations-menu'>
                <Link to="/locations/gurgaon">
                  <li>Gurgaon</li>
                </Link>
                <Link to="/locations/gujarat">
                  <li>Ahemadabad</li>
                </Link>
                <Link to="/locations/bhiwandi">
                  <li>Bhiwandi</li>
                </Link>
                <Link to="/locations/bengaluru">
                  <li>Bengaluru</li>
                </Link>
                <Link to="/locations/chennai">
                  <li>Chennai</li>
                </Link>
                <Link to="/locations/delhi">
                  <li>Delhi</li>
                </Link>
                <Link to="/locations/hyderabad">
                  <li>Hyderabad</li>
                </Link>
                <Link to="/locations/kolkatta">
                  <li>Kolkatta</li>
                </Link>
                <Link to="/locations/lucknow">
                  <li>Lucknow</li>
                </Link>
                <Link to="/locations/mumbai">
                  <li>Mumbai</li>
                </Link>
                <Link to="/locations/pune">
                  <li>Pune</li>
                </Link>
              </ul>
    </div>
    </>
  )
}

export default LocationMenu