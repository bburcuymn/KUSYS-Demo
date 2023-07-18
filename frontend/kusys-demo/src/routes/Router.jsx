import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "../views/HomePage/HomePage";
import LandingPage from "../views/LandingPage/LandingPage";
import LoginPageAdmin from "../views/LoginPage/LoginPageAdmin";
import LoginPageStudent from "../views/LoginPage/LoginPageStudent";
import StudentsPage from "../views/StudentsPage/StudentsPage";
import RegisterPageAdmin from "../views/RegisterPageAdmin/RegisterPageAdmin";
import RegisterPageStudent from "../views/RegisterPageStudent/RegisterPageStudent";
import StudentCourseList from '../views/StudentsCourseList/StudentCourseList';
import NotFoundPage from '../views/NotFound/NotFoundPage';


const AppRouter = () => {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/loginAdmin" element={<LoginPageAdmin />} />
            <Route path="/loginStudent" element={<LoginPageStudent />} />
            <Route path="/registerAdmin" element={<RegisterPageAdmin />} />
            <Route path="/registerStudent" element={<RegisterPageStudent />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/home/:username" element={<HomePage />} />
            <Route path="/home/students" element={<StudentsPage />} />
            <Route path="/my-courses" element={<StudentCourseList />} />
            <Route path="*" element={<NotFoundPage />} /> 
          </Routes>
        </Router>
      );
};

export default AppRouter;
