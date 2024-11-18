import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./IndustryMenu.css"

import SideNavbarHeader from '../SideNavbarHeader';



const IndustryMenu = () => {

 const navigate=useNavigate()

 

  const closeMobileNavbar=()=>{
    navigate(-1)
  }
  return (
    <>
    
 <div className='industry-container'>
    <SideNavbarHeader closeMobileNavbar={closeMobileNavbar} />
       <p className="breadcrumbs"><Link to='/'>Home</Link> / Industry</p>
       <ul className='industry-menu'>
          <Link to='/apparel-fashion'><li >APPAREL FASHION</li></Link>
          <Link to='/automotive'><li >AUTOMOTIVE</li></Link>
          <Link to='/electronics'><li >ELECTRONICS</li></Link>
          <Link to='/energy'><li >ENERGY</li></Link>
          <Link to='/food'><li >FOOD AND BEVERAGES</li></Link>
          <Link to='/healthcare'><li >HEALTH CARE</li></Link>
          <Link to='/retail'><li >RETAIL</li></Link>
          <Link to='/white-goods'><li >WHITE GOODS</li></Link>
          
         </ul>
    </div>
    </>
  )
}

export default IndustryMenu