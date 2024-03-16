import React, { useState } from 'react';
import './DoctorSignStyles.css';
import axios from '../axiosSetup'; // Import your Axios instance
import { useNavigate } from 'react-router-dom';
const DoctorSign = (props) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  //const [birthdate,setBirthdate]=useState(null);
  //const [gender,setGender]=useState(null);
  
  //const [doctorid, setDoctorId] = useState("");
  /*
  const [adminid, setAdminId] = useState("athul");
  const [userRole, setUserRole] = useState("1");
  */
 
  const generateDocId = () => {
    return Math.floor(1000 + Math.random() * 9000);
  }
  const adminid="athul";
 const userRole=1;
  const doctorid=generateDocId();
  /*
  useEffect(() => {
    // Update doctorId and userRole when the component mounts
    setDoctorId(generateDocId());
    
  }, []);
  */
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
      password: password,
      phone: phone,
      /*
      birthdate:birthdate,
      gender:gender,
      */
      doctorid: doctorid,
      adminid:adminid,
      userRole: userRole
    };
    const result= await axios.post(`/register`,formData);

    result.data.success ? successRoute() : errorHandling();
    
    function successRoute(){
      alert("Registration successful");
      navigate('/');
    }
      
    function errorHandling() {
      console.log(result.data);
      alert("Username Already Exists!!");

      /*var d = document.getElementById("error-box");
      d.style.display = "flex";
      
      d.innerHTML=`<span>${result.data.message}</span>`
      setTimeout(function () {
        d.style.display = "none";
        }, 5000);
        */

    }

   /* try {
      const response = await axios.post(`/register`, formData);
      if (response.status === 200) {
        console.log('Registration successful');
        // Handle successful registration (redirect, show success message, etc.)
      } else {
        console.error('Registration failed');
        // Handle registration failure
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle error
    }
    */
  };

 
  
  return (
    <>
    <div className='docc'>
      <div className="doc-sign">
        <div className="card">
          <div className="card_title">
            <h1>Doctor Registration</h1>
            <span>Already have an account? <a href="/Log">Sign In</a></span>
          </div>
          <div className="form">
            <form >
            <input type="email" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
              <input type="text" name="username" placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <input type="text" name='phone' placeholder='Mobile Number' value={phone} onChange={(e) => setPhone(e.target.value)}required/>
              <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
              <button type="submit" onClick={handleSubmit}>Sign Up</button>
            </form>
          </div>
          <div className="card_terms">
            <input type="checkbox" name="" id="terms" /> <span>I have read and agree to the <a href="">Terms of Service</a></span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default DoctorSign;
