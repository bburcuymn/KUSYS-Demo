import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginPageStyle } from './LoginPageStyle';
import axios from 'axios';
import { AuthContext } from '../../AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPageAdmin = () => {
  // State tanımlamaları
  const [corporationNo, setCorporationNo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Admin giriş isteği
      const response = await axios.post('/api/admins/login', {
        corporationNo,
        password,
      });

      console.log('Login başarılı', response.data);
      // Başarılı giriş bildirimi göster
      toast.success('Login Successful!');

      setAuth(true, true); // isAdmin: true, isLoggedIn: true

      navigate('/home');
    } catch (error) {
      console.log('Login başarısız', error);
      // Hatalı giriş bildirimi göster
      toast.error('Login Failed!');
    }
  };

  return (
    <LoginPageStyle>
      <div className="login-page-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Corporation No"
            value={corporationNo}
            onChange={(e) => setCorporationNo(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/registerAdmin" className='text-decoration-none'>Register</Link>
        </p>
      </div>
    </LoginPageStyle>
  );
};

export default LoginPageAdmin;
