import React from 'react';
import LandingPage from './views/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




// import StudentList from './components/StudentList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
