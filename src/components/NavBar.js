import React from 'react'
import logo from "../assets/handlogo.jpg"
import "./NavBarStyles.css"
const NavBar = () => {
  return (
    <>
    <div className='nav-container'>
      <div className='nav'>
        <img src={logo} style={{height:'30px',width:'30px'}} alt="" />
        <h1 style={{color:'white'}}>HandRehab</h1>
        <ul>
            <li>
                <a href="" >Home</a>
            </li>
            <li><a href="/AdminContact">Contact</a></li>
        </ul>
        
        </div>
    </div>
    </>
  )
}

export default NavBar