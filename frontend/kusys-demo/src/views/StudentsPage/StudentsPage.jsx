import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentPage = () => {
  // Öğrenci listesi ve diğer state değerleri
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

  // Yönetici durumunu kontrol etmek için useLocation kullanımı
  const location = useLocation();
  const isAdmin = location.state && location.state.isAdmin;

  // Öğrenci listesini almak için useEffect kullanımı
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

  // Öğrenci silme işlemini gerçekleştiren fonksiyon
  const handleDeleteStudent = async (studentId) => {
    try {
      await axios.delete(`/api/students/${studentId}`);
      fetchStudents();
      toast.success('Student Deleted. Please Refresh the Page!');
    } catch (error) {
      console.log('Error while deleting student', error);
      toast.error('Öğrenci silme işlemi başarısız oldu');
    }
  };
  
  // Öğrenci güncelleme işlemini gerçekleştiren fonksiyon
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
  
  // Öğrenci detaylarını açan fonksiyon
  const handleOpenStudentDetails = (studentId) => {
    const student = students.find((student) => student.studentId === studentId);
    if (student) {
      setSelectedStudentInfo(student);
      setIsModalOpen(true);
    }
  };

  // Modal'ı kapatma fonksiyonu
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

  // Form değerlerindeki değişiklikleri izleyen fonksiyon
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Formu gönderme fonksiyonu
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (selectedStudentId) {
        await axios.put(`/api/students/${selectedStudentId}`, formData);
        toast.success('Student Updated. Please Refresh the Page!');
      } else {
        await axios.post('/api/students', formData);
        toast.success('Student created. Please refresh the page!');
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
      toast.error('Öğrenci ekleme/güncelleme başarısız oldu');
    }
  };
  
  // Dersleri biçimlendiren yardımcı fonksiyon
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
        <h1 className='text-center fw-bold my-5'>STUDENT LİST</h1>
        {isAdmin && (
          <div className="mb-3 d-flex justify-content-end">
            <button className="btn btn-lg btn-primary" onClick={() => setIsModalOpen(true)}>
              <i class="fa-solid fa-plus"></i> Create Student
            </button>
          </div>
        )}
        <table className="table text-center my-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Student Number</th>
              {isAdmin && <th>Actions</th>}
            </tr>
          </thead>
          <tbody >
            {students.map((student) => (
              <tr key={student.studentId}>
                <td>{student.name}</td>
                <td>{student.schoolNo}</td>
                {isAdmin && (
                  <td >
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleUpdateStudent(student.studentId)}
                    >
                      <i class="fa-solid fa-pen-to-square"></i> Update
                    </button>
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => handleDeleteStudent(student.studentId)}
                    >
                      <i class="fa-solid fa-trash"></i> Delete
                    </button>
                    <button
                      className="btn btn-success "
                      onClick={() => handleOpenStudentDetails(student.studentId)}
                    >
                      <i class="fa-solid fa-circle-info"></i> Details
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
      <Footer></Footer>
    </div>
  );
};

export default StudentPage;
