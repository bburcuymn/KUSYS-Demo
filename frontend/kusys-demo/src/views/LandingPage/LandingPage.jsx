import React from 'react';
import { Link } from 'react-router-dom';
import { LandingPageStyle } from './LandingPageStyle';

const LandingPage = () => {

  return (
    <LandingPageStyle >
      <div className="landing-page-content ">
        <h1 className='mb-5'>Welcome to the KUSYS-Demo</h1>
        <div className="card">
          <h2>Login</h2>
          <div className="row my-3">
            <div className="col-md-6 ">
              <Link to="/loginAdmin" className='px-1 py-2 btn btn-primary text-dark text-decoration-none'>Login as an Admin</Link>
         </div>
          <div className="col-md-6">
       <Link to="/loginStudent" className='px-1 py-2 btn btn-success text-dark text-decoration-none'>Login as a Student</Link></div>
          </div>
        </div>
        <h6 className="my-3">OR</h6>
        <div className="card">
          <h2>Register</h2>
          <div className="row my-3"> 
          <div className="col-md-6 ">
            <Link to="/registerAdmin"className='px-1 py-2 btn btn-primary text-dark text-decoration-none'>Register for Admins</Link></div> 
        <div className="col-md-6 "> 
          <Link to="/registerStudent"className='px-1 py-2 btn btn-success text-dark text-decoration-none'>Register for Students</Link> </div>
          </div>
        </div>
      </div>
    </LandingPageStyle>
  );
};

export default LandingPage;
