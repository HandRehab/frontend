import React, { useState } from 'react';
import "./SignUpStyles.css";
import axios from "../axiosSetup";
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate,setBirthdate]=useState(null);
  const [gender,setGender]=useState(null);
  const userRole=2;
  //const [doctorid, setDoctorId] = useState("");
  /*
  const [adminid, setAdminId] = useState("athul");
  const [userRole, setUserRole] = useState("1");
  */
 const doctorid=localStorage.getItem("doctorid");
 const navigate=useNavigate();

 const handleSubmit = async (e,fun) => {
  e.preventDefault();

  if (!username || !name || !password) {
    alert('Please fill in all required fields.');
    return;
  }

  

  const formData = {
    username: username,
    name: name,
    phone: phone,
    password: password,
    
    birthdate:birthdate,
    gender:gender,
    
    doctorid: doctorid,
    userRole: userRole
  };
  const result= await axios.post(`/register`,formData);

  result.data.success ? successRoute() : errorHandling();
  
  function successRoute(){
    alert("Registration successful");
    navigate('/Home');
  }
    
  function errorHandling() {
    console.log(result.data);
    alert("Username Already Exists!!");
  }

 };
    /*
    try {
      const response = await fetch('http://127.0.0.1:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // User registered successfully
        console.log('User registered:', formData);
      } else {
        // Handle registration failure
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
*/
  return (
    <>
    <div className='patient-sign'>
      <section className="container">
        <header>Registration Form</header>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              name="full_name"
              placeholder="Enter full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label>Mobile Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="column">
            <div className="input-box">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label>Password</label>
              <input
                type="password"
                name="password_repeat"
                placeholder="Repeat your password"
                required
              />
            </div>
            <div className="input-box">
              <label>Birth Date</label>
              <input
                type="date"
                name="birth_date"
                placeholder="Enter birth date"
                required
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
          </div>
          <div className="gender-box">
            <h3 style={{fontSize:'25px'}}>Gender</h3>
            <div className="gender-option">
              <div className="gender">
                <input
                  type="radio"
                  id="check-male"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="check-male">Male</label>
              </div>
              <div className="gender">
                <input
                  type="radio"
                  id="check-female"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="check-female">Female</label>
              </div>
              <div className="gender">
                <input
                  type="radio"
                  id="check-other"
                  name="gender"
                  value='prefer_not_to_say'
                  checked={gender === 'prefer_not_to_say'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="check-other">Prefer not to say</label>
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
      </div>
    </>
  );
};

export default SignUp;
