import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';

const StudentPage = () => {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    schoolNo: '',
    birthDay: '',
    password: '',
    courses: [],
  });
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [selectedStudentInfo, setSelectedStudentInfo] = useState(null);

  const location = useLocation();
  const isAdmin = location.state && location.state.isAdmin;

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('/api/students');
      setStudents(response.data);
    } catch (error) {
      console.log('Error while fetching students', error);
    }
  };

  const handleDeleteStudent = async (studentId) => {
    try {
      await axios.delete(`/api/students/${studentId}`);
      fetchStudents();
    } catch (error) {
      console.log('Error while deleting student', error);
    }
  };

  const handleUpdateStudent = async (studentId) => {
    const student = students.find((student) => student.studentId === studentId);
    if (student) {
      setFormData({
        name: student.name,
        email: student.email,
        schoolNo: student.schoolNo,
        birthDay: student.birthDay,
        password: student.password,
        courses: student.courses,
      });
      setSelectedStudentId(studentId);
      setIsModalOpen(true);
    }
  };

  const handleOpenStudentDetails = (studentId) => {
    const student = students.find((student) => student.studentId === studentId);
    if (student) {
      setSelectedStudentInfo(student);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStudentId(null);
    setSelectedStudentInfo(null);
    setFormData({
      name: '',
      email: '',
      schoolNo: '',
      birthDay: '',
      password: '',
      courses: [],
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedStudentId) {
        await axios.put(`/api/students/${selectedStudentId}`, formData);
      } else {
        await axios.post('/api/students', formData);
      }
      fetchStudents();
      setIsModalOpen(false);
      setSelectedStudentId(null);
      setFormData({
        name: '',
        email: '',
        schoolNo: '',
        birthDay: '',
        password: '',
        courses: [],
      });
    } catch (error) {
      console.log('Error while updating/creating student', error);
    }
  };

  const formatCourses = (courses) => {
    return courses.map((course) => (
      <div key={course.courseId}>
       
        <p>
          {course.courseCode}
        </p>
       
      </div>
    ));
  };

  return (
    <div>
      <Navbar isAdmin={isAdmin} />
      <div className="container mt-4">
        <h1>Students List</h1>
        {isAdmin && (
          <div className="mb-3">
            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
              Create Student
            </button>
          </div>
        )}
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Student Number</th>
              {isAdmin && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.studentId}>
                <td>{student.name}</td>
                <td>{student.schoolNo}</td>
                {isAdmin && (
                  <td>
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => handleUpdateStudent(student.studentId)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteStudent(student.studentId)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-info ml-2"
                      onClick={() => handleOpenStudentDetails(student.studentId)}
                    >
                      Details
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedStudentId ? 'Update Student' : 'Create Student'}
                </h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {selectedStudentInfo ? (
                  <div>
                    <h2>Student Details</h2>
                    <p>
                      <strong>Name:</strong> {selectedStudentInfo.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {selectedStudentInfo.email}
                    </p>
                    <p>
                      <strong>Student Number:</strong> {selectedStudentInfo.schoolNo}
                    </p>
                    <p>
                      <strong>Birth Date:</strong> {selectedStudentInfo.birthDay}
                    </p>
                    <div>
                      <strong>Courses:</strong>
                      {formatCourses(selectedStudentInfo.courses)}
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="schoolNo">Student Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="schoolNo"
                        name="schoolNo"
                        value={formData.schoolNo}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="birthDay">Birth Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="birthDay"
                        name="birthDay"
                        value={formData.birthDay}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    {/* <div className="form-group">
                      <label htmlFor="courses">Courses</label>
                      <input
                        type="text"
                        className="form-control"
                        id="courses"
                        name="courses"
                        value={formData.courses}
                        onChange={handleChange}
                      />
                    </div> */}
                    <button type="submit" className="btn btn-primary">
                      {selectedStudentId ? 'Update' : 'Create'}
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                      Cancel
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentPage;
