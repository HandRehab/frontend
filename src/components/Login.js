import React, { useState } from 'react';
import './LoginStyles.css';
import login from '../assets/login.jpg';
import logo from '../assets/handlogo.jpg';
import axios from '../axiosSetup';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    if( username.length > 0 && password.length > 0){
        return false;
    }
    else{
        return true;
    }
  }

  function errorHandling(msg) {
    alert(msg);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.get(`/validate?username=${username}&password=${password}`);
        errorHandling(res.data.message);

        if (res.data.access) {
            console.log('logged');

            const userType = res.data.userRole;
            const name=res.data.name;
            console.log(userType);
            localStorage.setItem('logged', true);
            localStorage.setItem('username', username);
            localStorage.setItem('user', userType);
            localStorage.setItem('name',name);

            if (userType === 1) {
                localStorage.setItem('doctorid', res.data.doctorid);
            }
        }
    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error during login:', error);
        // Optionally, you can call errorHandling() function here
    }
};


  return (
    <>
      <body className='login-body'>
        <section className='login-container'>
          <div className='image-section'>
            <div className='image-wrapper'>
              <img src={login} alt='' />
            </div>

            <div className='content-container'>
              <h1 className='section-heading'>
                Empowering People Through Virtual <br />
                <span>HandRehab</span>
              </h1>
              <p className='section-paragraph'>Connecting and digtizing thearpy. Bridging the gap.</p>
            </div>
          </div>

          <div className='form-section'>
            <div className='form-wrapper'>
              <div className='logo-container'>
                <a href='#' className='logo-container'>
                  <img src={logo} alt='' />
                </a>
              </div>

              <h2>Welcome Back👋</h2>
              <p>Enter your credentials to access your account</p>
              <div className='input-container'>
                <div className='form-group'>
                  <label htmlFor='uname'>Username</label>
                  <input type='text' id='uname' autoComplete='off' onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input type='password' id='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
              </div>

              <div className='remember-forgot'>
                <div className='remember-me'>
                  <input type='checkbox' value='remember-me' id='remember-me' />
                  <label htmlFor='remember-me'>Remember Me</label>
                </div>

                <a href='#'>Forgor password?</a>
              </div>

              <button className='login-btn' disabled={!validateForm}  onClick={handleSubmit}>
                Log In
              </button>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default Login;
