import React from 'react';
import 'boxicons';
import "./PatientSelectStyles.css";
import { useNavigate } from 'react-router-dom';

const PatientSelect = () => {
  const navigate = useNavigate();

  const handleAssessmentClick = () => {
    // Navigate to the Assessment page
    navigate('/Assessment');
  };

  const handleRehabilitationClick = () => {
    // Navigate to the Rehabilitation page
    navigate('/Rehabilitation');
  };

  const logOut = () => {
    alert("Logging out!!");
    localStorage.clear();
    setTimeout(() => navigate('/'), 3000);
  };

  return (
    <>
      <body className='patient-home'>
        <div className='patient-body'>
          <div className='patient-heading'>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <h3 className='heading'>Welcome Patient</h3>
            <h5 className='sub-heading'>Manage your patient privileges here</h5>
          </div>
          <div className='patient-container'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className='patient-btn' onClick={handleAssessmentClick}><i class='bx bx-network-chart'></i><label htmlFor="">Assessment</label></button>
              <button className='patient-btn' onClick={handleRehabilitationClick}><i class='bx bxs-hand'></i><label htmlFor="">Rehabilitation</label></button>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className='patient-btn'><i class='bx bx-message-square-dots'></i><label htmlFor="">Feedback</label></button>
              <button className='patient-btn' onClick={logOut}><i class='bx bx-log-out'></i><label htmlFor="">Log Out</label></button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default PatientSelect;
