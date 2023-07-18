import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CoursesList = ({ courses, isAdmin, student, updateStudentCourses }) => {

    // buton için işlemi belirleyen fonksiyon
    const renderActionButton = (course) => {
        if (isAdmin === false) {
            // Eğer öğrenci ise
            if (isCourseEnrolled(course.courseId)) {
                // Dersi almışsa "Unregister" butonu göster
                return (
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            updateStudentCourses(course.courseId, 'drop');
                            toast.success(`You Dropped The Class: ${course.courseName}`);
                        }}
                    >
                        Unregister
                    </button>
                );
            } else {
                // Dersi almamışsa "Register" butonu göster
                return (
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            updateStudentCourses(course.courseId, 'enroll');
                            toast.success(`You registered for the course: ${course.courseName}`);
                        }}
                    >
                        Register
                    </button>
                );
            }
        }
        return null;
    };

    // Dersin öğrenci tarafından alınıp alınmadığını kontrol eden fonksiyon
    const isCourseEnrolled = (courseId) => {
        return (
            student &&
            student.courses &&
            student.courses.some((course) => course.courseId === courseId)
        );
    };

    return (
        <div className="container">
            <h1 className='text-center fw-bold my-5'>ALL COURSES</h1>
            <div className="row my-5">
                {courses.map((course) => (
                    // Her bir ders için kart oluştur
                    <div key={course.courseId} className="col-md-3 ">
                        <div className="card m-3 cursor-pointer">
                            <img src={course.img} className="card-img-top" alt={course.courseName} />
                            <div className="card-body">
                                <h5 className="card-title">{course.courseName}</h5>
                                <p className="card-text">{course.courseCode}</p>
                                {renderActionButton(course)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursesList;
