import React, { useEffect, useState, useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import CoursesList from '../../components/CoursesList/CoursesList';
import axios from 'axios';
import { AuthContext } from '../../AuthContext';

const HomePage = (props) => {
  const [courses, setCourses] = useState([]);
  const [studentData, setStudentData] = useState(null);
  const location = useLocation();
  const { isAdmin, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const studentDataFromLocation = location.state && location.state.student;

  useEffect(() => {
    fetchCourses();
    if (studentDataFromLocation) {
      setStudentData(studentDataFromLocation);
    }
  }, [studentDataFromLocation]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('/api/allCourses');
      setCourses(response.data);
    } catch (error) {
      console.log('Error while fetching courses', error);
    }
  };

  const updateStudentCourses = async (courseId, action) => {
    try {
      const updatedStudent = { ...studentData };
      const updatedCourses = [...updatedStudent.courses];

      if (action === 'enroll') {
        // Dersi al
        if (!isCourseEnrolled(courseId)) {
          const selectedCourse = courses.find((course) => course.courseId === courseId);
          updatedCourses.push(selectedCourse);
          updatedStudent.courses = updatedCourses;
        }
      } else if (action === 'drop') {
        // Dersi bırak
        updatedStudent.courses = updatedCourses.filter((course) => course.courseId !== courseId);
      }

      // Öğrenci verilerini güncelle
      const response = await axios.put(`/api/students/${updatedStudent.studentId}`, updatedStudent);
      console.log('Updated Student:', response.data);

      setStudentData(updatedStudent); // Öğrenci verilerini güncelleme
    } catch (error) {
      console.log('Error while updating student courses', error);
    }
  };

  const isCourseEnrolled = (courseId) => {
    return (
      studentData &&
      studentData.courses &&
      studentData.courses.some((course) => course.courseId === courseId)
    );
  };

  const handleLogout = () => {
    setAuth(false, false);
    navigate('/');
  };

  return (
    <div>
      <Navbar isAdmin={isAdmin} handleLogout={handleLogout} student={studentData} />
      <CoursesList
        courses={courses}
        isAdmin={isAdmin}
        student={studentData}
        updateStudentCourses={updateStudentCourses}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
