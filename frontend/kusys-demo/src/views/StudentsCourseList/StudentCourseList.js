import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MyCourses from '../../components/My-Courses/MyCourses';

const StudentCourseList = () => {
    // useLocation kullanımı
    const location = useLocation();

    // Location üzerinden alınan öğrenci verileri
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
