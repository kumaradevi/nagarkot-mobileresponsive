import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Navbar'
import "./Resources.css"
import SideNavbarHeader from '../SideNavbarHeader'



const Resources = () => {
  const navigate=useNavigate();
  const closeMobileNavbar=()=>{
    navigate(-1)
  }
  return (
    <>
    
    <div className='resources-container'>
      <SideNavbarHeader closeMobileNavbar={closeMobileNavbar}/>
       <p className="breadcrumbs"><Link to='/'>Home</Link> / Blogs</p>
       <ul className='resources-menu'>
                <Link to='/blogs'><li>Blogs</li></Link>
           
            </ul>
          
         
    </div>
    </>
  )
}

export default Resources