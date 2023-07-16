import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginPageStyle } from './LoginPageStyle';
import axios from 'axios';
import { AuthContext } from '../../AuthContext';

const LoginPageStudent = () => {
    const [schoolNo, setSchoolNo] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/students/login', {
                schoolNo,
                password,
            });

            console.log('Login başarılı', response.data);

            setAuth(false, true); // isAdmin: false, isLoggedIn: true
// console.log('response.data', response.data);
            navigate('/home',  { state: { student: response.data } });
        } catch (error) {
            console.log('Login başarısız', error);
        }
    };

    return (
        <LoginPageStyle >
            <div className="login-page-content">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="School No"
                        value={schoolNo}
                        onChange={(e) => setSchoolNo(e.target.value)}
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
                    Don't have an account? <Link to="/registerStudent">Register</Link>
                </p>
            </div>
        </LoginPageStyle>
    );
};

export default LoginPageStudent;
