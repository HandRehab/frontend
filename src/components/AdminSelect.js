import React from 'react';
import 'boxicons';
import './AdminSelectStyles.css';
import { useNavigate } from 'react-router-dom';

const AdminSelect = () => {
  const navigate = useNavigate();

  const handleAddPatientClick = () => {
    // Navigate to the 'add-patient' route (replace with your actual route)
    navigate('/Reg');
  };

  const handleChatClick = () => {
    // Navigate to the DoctorChat page
    navigate('/DoctorChat');
  };

  const logOut = () => {
    alert('Logging out!!');
    localStorage.clear();
    setTimeout(navigate('/'), 3000);
  };

  return (
    <>
      <body className="admin-home">
        <div className="admin-body">
          <div className="admin-heading">
            <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
            <h3 className="heading">Welcome Doctor</h3>
            <h5 className="sub-heading">Manage your doctor privileges here</h5>
          </div>
          <div className="admin-container">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="admin-btn" onClick={handleAddPatientClick}>
                <i className="bx bx-user-plus"></i> <label htmlFor="">Add Patient</label>
              </button>
              <button className="admin-btn" onClick={handleChatClick}>
                <i className="bx bx-message-square-dots"></i> <label htmlFor="">Chat</label>
              </button>
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button className="admin-btn">
                <i className="bx bx-user-circle"></i> <label htmlFor="">View Patient</label>
              </button>
              <button className="admin-btn" onClick={logOut}>
                <i className="bx bx-log-out"></i> <label htmlFor="">Log Out</label>
              </button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default AdminSelect;
