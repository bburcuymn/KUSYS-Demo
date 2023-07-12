import React from 'react';
import { Link } from 'react-router-dom';
import { RegisterPageStyle } from './RegisterPageStyle';

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Kayıt işlemleri burada gerçekleştirilebilir
  };

  return (
    <RegisterPageStyle backgroundImage="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80">
      <div className="register-page-content">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="date" placeholder="Birthdate" required />
          <input type="text" placeholder="Student ID" required />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </RegisterPageStyle>
  );
};

export default RegisterPage;
