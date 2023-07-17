import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MyCourses from '../../components/My-Courses/MyCourses';

const StudentCourseList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const studentDataFromLocation = location.state && location.state.student;

    return (
        <div>
            <Navbar isAdmin={false} handleLogout={() => { }} student={studentDataFromLocation} />
            <MyCourses student={studentDataFromLocation} />
            <Footer />
        </div>
    );
};

export default StudentCourseList;
