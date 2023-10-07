import React from 'react'
import {  Link } from "react-router-dom";
import './nav.css';
import logo from './logo.jpg'
console.log(logo);
function Nav() {
  return (
   <div >
      <div >
       <div className='navbar'>
          <nav className='nabar-sub'>
            <div className='container'>
                <img alt="Logo" className='logo'src={logo}/>
                 <h2>𝓅𝓁𝒶𝓃𝓉 𝒾𝓉</h2>
             </div> 
                 <div className='container-sub'>
                    <ul className='home2'>
                        <li><Link className='home' to="/">Home</Link></li>
                        <li><Link className='home' to="/About">About</Link></li>
                        <li><Link className='home' to="/Form">Volunteer</Link></li>
                        <li><Link className='home' to="/Login">Payment</Link></li>
                        
                     </ul>
                     
                  </div>
           </nav>
        </div>
        <div className='middle'></div>
   
        </div>
        </div>

        
)
}


export default Nav;