import React, { useState, useEffect } from 'react';
import axios from "../axiosSetup";

const PatientProfilePage = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        // Fetch patient data from the backend when the component mounts
        const fetchPatients = async () => {
            try {
                const response = await axios.get('/api/patients'); // Replace '/api/patients' with your actual endpoint
                setPatients(response.data); // Set the retrieved patient data to the state
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients(); // Call the fetchPatients function
    }, []); // The empty dependency array ensures that this effect runs only once, equivalent to componentDidMount

    return (
        <div>
            <h1>Patients List</h1>
            <ul>
                {patients.map((patient) => (
                    <li key={patient.id}>
                        <strong>Name:</strong> {patient.name}, <strong>Age:</strong> {patient.age}, <strong>Gender:</strong> {patient.gender}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientProfilePage;
