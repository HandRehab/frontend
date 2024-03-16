import React from 'react';
import 'boxicons'
import './SideBar.css'; // Make sure to import the CSS file

const SideBar = () => {
  return (
    <div className="sidebar close">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <ul className="nav-links">
        <li>
          <div className="iocn-link">
            <a href="/Home"><i class='bx bx-user-pin'></i></a>
          </div>
          <ul className="sub-menu">
            <li><a className="link_name" href="/Home">Profile</a></li>
            
          </ul>
        </li>

        <li>
          <div className="iocn-link">
            <a href="/Assessment">
            <i class='bx bx-edit-alt'></i>
              <span className="link_name">Assessment</span>
            </a>
          </div>
          <ul className="sub-menu">
            <li><a className="link_name" href="/Assessment">Assessment</a></li>
            
          </ul>
        </li>

        <li>
          <a href="/Rehabilitation">
          <i class='bx bx-run'></i>
            <span className="link_name">Rehabilitation</span>
          </a>
          <ul className="sub-menu blank">
            <li><a className="link_name" href="/Rehabilitation">Rehabilitation</a></li>
          </ul>
        </li>

        <li>
          <a href="#">
            <i className='bx bx-pie-chart-alt-2'></i>
            <span className="link_name">Analytics</span>
          </a>
          <ul className="sub-menu blank">
            <li><a className="link_name" href="#">Analytics</a></li>
          </ul>
        </li>

        

        <li>
          <div className="iocn-link">
            <a href="#">
            <i class='bx bxs-comment-detail'></i>
              <span className="link_name">Feedback</span>
            </a>
          </div>
          <ul className="sub-menu">
            <li><a className="link_name" href="#">Feedback</a></li>
            
          </ul>
        </li>

        

        
      </ul>
    </div>
  );
};

export default SideBar;
