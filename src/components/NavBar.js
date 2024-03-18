import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/handlogo.jpg";
import "./NavBarStyles.css";

const NavBar = () => {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userTypeFromStorage = localStorage.getItem('user');
    setUserType(userTypeFromStorage);
  }, []); // Fetch user type when component mounts

  const handleGoBack = () => {
    navigate(-1);
  };

  if (userType === null) {
    // Render loading state until user type is fetched
    return (
      <div>Loading...</div>
    );
  }

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
          <a onClick={handleGoBack} className='back-button'>
            <i class='bx bx-arrow-back'></i><label htmlFor="">Back</label>
          </a>
          {userType === '2' && (
            <a href='/Profile' className='profile-icon'>
              <i className='bx bx-user'></i>
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
