import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isAdmin, handleLogout, student }) => {
    const navigate = useNavigate();
    const location = useLocation();


    const handleStudentsClick = () => {
        navigate('/home/students', { state: { isAdmin: true } });
    };

    const handleMyCoursesClick = () => {
        navigate('/my-courses', { state: { student } });
    };

    // const handleLogout = () => {
    //     setAuth(false, false);
    //     navigate('/');
    // };

    const isMyCoursesActive = location.pathname === '/my-courses';

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 px-5">
            <Link className="navbar-brand fw-bold" to="/home">
                KUSYS-Demo
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav d-flex gap-4 fs-6 ">
                    {isAdmin ? (
                        <>
                            <li className="nav-item cursor-pointer">
                                <a className="nav-link" onClick={handleStudentsClick}>
                                    <i className="fa-solid fa-people-group text-success fs-5"></i> Students
                                </a>
                            </li>
                            <li className="nav-item cursor-pointer">
                                <Link className="nav-link" to="/profile">
                                    <i className="fa-solid fa-user text-success fs-5"></i> Profile
                                </Link>
                            </li>
                            <li className="nav-item cursor-pointer">
                                <a className="nav-link" onClick={handleLogout}>
                                    <i className="fa-solid fa-right-from-bracket text-success fs-5"></i> Logout
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className={`nav-item cursor-pointer ${isMyCoursesActive ? 'active' : ''}`}>
                                <a className="nav-link" onClick={handleMyCoursesClick}>
                                    <i className="fa-solid fa-book text-success fs-5"></i> My Courses
                                </a>

                            </li>
                            <li className="nav-item cursor-pointer">
                                <Link className="nav-link" to="/profile">
                                    <i className="fa-solid fa-user text-success fs-5"></i> Profile
                                </Link>
                            </li>
                            <li className="nav-item cursor-pointer">
                                <a className="nav-link" onClick={handleLogout} >
                                    <i className="fa-solid fa-right-from-bracket text-success fs-5"></i> Logout
                                </a>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
