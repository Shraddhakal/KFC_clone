import React from 'react'
import logo  from "../../assets/Images/vector.svg";
import './header.css';
import Menu from '../Menu/menu';
const header = () => {
  return (
   <>
      <div className='header'>
       <div className="logo">
          <img src={logo} alt="" />
       </div>
       <div className="auth-link">
         <ul>
            <li><a href=''><i class="bi bi-geo-alt"></i>Store Locator</a></li>
            <li><a href=''><i class="bi bi-person-fill"></i>Signin/Register</a></li>
         </ul>
       </div>
    </div>
    <Menu/>
   </>
   
  )
}

export default header
