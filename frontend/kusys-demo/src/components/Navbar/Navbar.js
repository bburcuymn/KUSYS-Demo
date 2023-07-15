import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAdmin }) => {
    return (
        <nav>
            <ul>
                {isAdmin ? (
                    <>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li>
                            <Link to="/students">Students</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </>

                ) : (
                    <>
                        <li>
                            <Link to="/all-courses">All Courses</Link>
                        </li>
                        <li>
                            <Link to="/my-courses">My Courses</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </>

                )}
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
