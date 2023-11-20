import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockDataLogin } from "../../data/mockData";
import './style.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the entered username and password match any in the mock data
    const user = mockDataLogin.find(
      (user) => user.Username === username && user.Password === password
    );

    if (user) {
      // Call the onLogin callback to update the isAuthenticated state in the parent component (App.js)
      onLogin();
      // Navigate to the dashboard page
      navigate('/dashboard');
    } else {
      // Handle unsuccessful login (display an error message, redirect, etc.)
      console.log("Invalid username or password");
    }
  };


  useEffect(() => {
    const signInBtnLink = document.querySelector('.signInBtn-link');
    const signUpBtnLink = document.querySelector('.signUpBtn-link');
    const wrapper = document.querySelector('.wrapper');

    const toggleActiveClass = () => {
      wrapper.classList.toggle('active');
    };

    signUpBtnLink.addEventListener('click', toggleActiveClass);
    signInBtnLink.addEventListener('click', toggleActiveClass);

    return () => {
      // Cleanup: Remove event listeners when the component unmounts
      signUpBtnLink.removeEventListener('click', toggleActiveClass);
      signInBtnLink.removeEventListener('click', toggleActiveClass);
    };
  }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <div className="container">
        <h1 className='welcome'>Welcome To <br/> Student Portal</h1>
    <div className="wrapper login-page">
      <div className="form-wrapper sign-in">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="">Username</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="">Password</label>
          </div>
          <div className="remember">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button className="buttons" type="submit">
            Login
          </button>
          <div className="signUp-link">
            <p>
              Don't have an account?{' '}
              <a href="#" className="signUpBtn-link">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="form-wrapper sign-up">
        <form action="">
          <h2>Sign Up</h2>
          <div className="input-group">
            <input type="text" required />
            <label htmlFor="">Username</label>
          </div>
          <div className="input-group">
            <input type="email" required />
            <label htmlFor="">Email</label>
          </div>
          <div className="input-group">
            <input type="password" required />
            <label htmlFor="">Password</label>
          </div>
          <div className="remember">
            <label>
              <input type="checkbox" /> I agree to the terms & conditions
            </label>
          </div>
          <button className="buttons" type="submit">
            Sign Up
          </button>

          <div className="signUp-link">
            <p>
              Already have an account?{' '}
              <a href="#" className="signInBtn-link">
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
    
  );
}

export default Login;
