import React from 'react';
import { useLocation } from 'react-router-dom';
import "./HeaderStyles.css";
import logo from "../assets/handlogo.jpg";

const Header = () => {
  const location = useLocation();
//conditional routing 
//the navbar changes accordingly for the admin dashboard when you navigate from there to contact.
//adjust this code so as that url is not accessible once database is connected
  const renderAboutAndSignIn = () => {
    if (location.pathname === '/AdminContact') {
      return (
        <li><a href="/Admin">Home</a></li>
      );
    } else {
      return (
        <>
          <li><a href="/">Home</a></li>
          <li><a href="/ContactDev">Contact</a></li>
          <li><a href="" >About</a></li>
          <a href="/Home" className='sign-btn'>Sign In</a>
        </>
      );
    }
  };

//will be displayed by default 
  return (
    <>
      <header>
        <div className='main-nav'>
          <div className='header-nav'>
            <a href=""><img src={logo} alt="" className='logo' /></a>
            <a href="/" className='header'><h1 className='header-head'>HandRehab</h1></a>
            <ul>
              {renderAboutAndSignIn()}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
