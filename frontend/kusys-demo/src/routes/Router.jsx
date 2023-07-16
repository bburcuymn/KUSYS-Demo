import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "../views/HomePage/HomePage";
import LandingPage from "../views/LandingPage/LandingPage";
import LoginPageAdmin from "../views/LoginPage/LoginPageAdmin";
import LoginPageStudent from "../views/LoginPage/LoginPageStudent";
import StudentsPage from "../views/StudentsPage/StudentsPage";
import StudentDetailPage from "../views/StudentDetailPage/StudentDetailPage";
import CoursesPage from "../views/CoursesPage/CoursesPage";
import RegisterPageAdmin from "../views/RegisterPageAdmin/RegisterPageAdmin";
import RegisterPageStudent from "../views/RegisterPageStudent/RegisterPageStudent";


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
            <Route path="/home/:username/courses" element={<CoursesPage />} />
            <Route path="/home/:username/students/:id" element={<StudentDetailPage />} />
            {/* Diğer rotaları buraya ekleyin */}
            <Route path="*" element={<h1>404 Not Found</h1>} /> 


          </Routes>
        </Router>
      );
};

export default AppRouter;
