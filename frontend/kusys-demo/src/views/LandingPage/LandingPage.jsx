import React from 'react';
import { Link } from 'react-router-dom';
import { LandingPageStyle } from './LandingPageStyle';

const LandingPage = () => {
  const landingPageStyle = {
    backgroundImage: "url(https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
  };

  return (
    <LandingPageStyle style={landingPageStyle}>
      <div className="landing-page-content">
        <h1>Welcome to the KUSYS-Demo</h1>
        <div className="card">
          <h2>Login</h2>
          <Link to="/login">Admin</Link>
          <Link to="/login">Student</Link>
        </div>
        <div className="card">
          <h2>Register</h2>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </LandingPageStyle>
  );
};

export default LandingPage;
