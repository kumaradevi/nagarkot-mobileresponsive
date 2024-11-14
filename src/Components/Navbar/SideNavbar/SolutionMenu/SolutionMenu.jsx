import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./SolutionMenu.css"

import SideNavbarHeader from '../SideNavbarHeader';



const SolutionMenu = () => {

 const navigate=useNavigate()

 

  const closeMobileNavbar=()=>{
    navigate(-1)
  }
  return (
    <>
    
 <div className='solutions-container'>
    <SideNavbarHeader closeMobileNavbar={closeMobileNavbar} />
       <p className="breadcrumbs"><Link to='/'>Home</Link> / Solutions</p>
       <ul className='solutions-menu'>
                <Link to='/start-ups'><li>Startups</li></Link>
           
            <Link to='/msme'><li>MSME</li></Link>
           <Link to='/enterprise'><li>EnterPrise</li></Link> </ul>
          
         
    </div>
    </>
  )
}

export default SolutionMenu