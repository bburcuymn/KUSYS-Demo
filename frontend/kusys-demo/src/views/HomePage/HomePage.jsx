import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import CoursesList from '../../components/CoursesList/CoursesList';
import axios from 'axios';

const HomePage = (props) => {
  const [courses, setCourses] = useState([]);
  const location = useLocation();
  const isAdmin = location.state && location.state.isAdmin;

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('/api/allCourses');
      setCourses(response.data);
    } catch (error) {
      console.log('Error while fetching courses', error);
    }
  };


  //  console.log(isAdmin);

  return (
    <div>
      <Navbar isAdmin={isAdmin} />
 
     <CoursesList courses={courses}></CoursesList>

      <Footer></Footer>
    </div>
  );
};

export default HomePage;
