import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Login = () => {
  
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 style={{ color: '#d8613c' }}>LOGIN</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-primary login-button">Login</button>
        </form>
        <div className="signup-link">
        <span>Don't have an account? </span>
        <Link  to="/signup" style={{ color: '#d8613c', cursor: 'pointer' }} target="_blank">Signup</Link> {/* Use Link component for signup */}
        </div>
      </div>
    </div>
  );
};

export default Login;
