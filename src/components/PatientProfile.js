import React from 'react';
import './PatientProfileStyles.css';

const PatientProfile = () => {
  return (
    <div className="profile-container">
      {/* Personal Information */}
      <div className="personal-info-container">
        <div className="card personal-info-card">
          <div className="card-header">Personal Information</div>
          <div className="card-body">
            <ul>
              <li><strong>Name:</strong> John Doe</li>
              <li><strong>Contact:</strong> +1 234 567 890</li>
              <li><strong>Username:</strong> johndoe123</li>
              <li><strong>Date of Birth:</strong> January 1, 1990</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Assignments */}
      <div className="assignments-container">
        {/* Assignment Week 1 */}
        <div className="card assignments-card">
          <div className="card-header">Assignments - Week 1</div>
          <div className="card-body">
            <ul>
              <li>Assignment 1 - Score: 90%</li>
              <li>Assignment 2 - Score: 85%</li>
              <li>Assignment 3 - Score: 95%</li>
            </ul>
          </div>
        </div>

        {/* Assignment Week 2 */}
        <div className="card assignments-card">
          <div className="card-header">Assignments - Week 2</div>
          <div className="card-body">
            <ul>
              <li>Assignment 1 - Score: 80%</li>
              <li>Assignment 2 - Score: 75%</li>
              <li>Assignment 3 - Score: 85%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
