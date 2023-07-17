// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { RegisterPageStyle } from './RegisterPageStyle';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RegisterPageAdmin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [corporationNo, setCorporationNo] = useState('');
    const [birthDay, setBirthDay] = useState('');

    const navigate = useNavigate();



    const handleRegister = async (event) => {

        event.preventDefault();

        const newAdmin = { name, email, corporationNo, birthDay, password };

        try {
            // Yeni admin verilerini db.json dosyasına kaydet
            await fetch('http://localhost:5000/api/admins', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAdmin),
            });

            console.log('Admin başarıyla kaydedildi:', newAdmin);
            toast.success('Registration Successful!'); // Başarılı bildirimi göster

            // Kayıt işleminden sonra yapılacak işlemler
        } catch (error) {
            console.error('Kayıt işlemi başarısız:', error);
            // Hata durumunda yapılacak işlemler
        }
        navigate('/loginAdmin');
    };


    return (
        <RegisterPageStyle>
            <div className="register-page-content">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="form-group d-flex justify-content-between align-items-center my-2 ">
                        <label className='me-3' htmlFor="name">Name: </label>
                        <input type="text" id="name" placeholder="Enter name" required value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group d-flex justify-content-between align-items-center my-2">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" placeholder="Enter email" required value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group d-flex justify-content-between align-items-center my-2">
                        <label htmlFor="corporationNo">Corporation No:</label>
                        <input type="text" id="corporationNo" placeholder="Enter Corporation No" required value={corporationNo} onChange={e => setCorporationNo(e.target.value)} />
                    </div>
                    <div className="form-group d-flex justify-content-between align-items-center my-2">
                        <label htmlFor="birthDay">Birth Day:</label>
                        <input type="date" id="birthDay" placeholder="Enter Birth Day" required value={birthDay} onChange={e => setBirthDay(e.target.value)} />
                    </div>
                    <div className="form-group d-flex justify-content-between align-items-center my-2">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" placeholder="Enter password" required value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group d-flex justify-content-between align-items-center my-2">
                        <label className='me-3' htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" placeholder="Confirm password" required />
                    </div>
                    <button type="submit" className="primary" onClick={handleRegister}>Register</button>
                </form>

            </div>
        </RegisterPageStyle>
    );
};

export default RegisterPageAdmin;
