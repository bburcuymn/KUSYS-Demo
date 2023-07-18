import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Öğrencileri getirmek için backend API endpoint'ine istek yap
    axios.get('/api/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Öğrencileri alma hatası:', error);
      });
  }, []);

  return (
    <div>
      <h2>Öğrenci Listesi</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
