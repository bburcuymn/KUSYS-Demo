import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "../views/HomePage/HomePage";
import LandingPage from "../views/LandingPage/LandingPage";
import LoginPage from "../views/LoginPage/LoginPage";
import RegisterPage from "../views/RegisterPage/RegisterPage";
import StudentsPage from "../views/StudentsPage/StudentsPage";
import StudentDetailPage from "../views/StudentDetailPage/StudentDetailPage";
import CoursesPage from "../views/CoursesPage/CoursesPage";


const AppRouter = () => {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home/:username" element={<HomePage />} />
            <Route path="/home/:username/students" element={<StudentsPage />} />
            <Route path="/home/:username/courses" element={<CoursesPage />} />
            <Route path="/home/:username/students/:id" element={<StudentDetailPage />} />
            {/* Diğer rotaları buraya ekleyin */}
          </Routes>
        </Router>
      );
};

export default AppRouter;
