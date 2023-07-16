// CoursesList.js

import React from 'react';

const CoursesList = ({ courses, isAdmin, student, updateStudentCourses }) => {
    console.log(isAdmin);
    console.log(student);

    const renderActionButton = (course) => {
        if (isAdmin === false) {
            if (isCourseEnrolled(course.courseId)) {
                return (
                    <button
                        className="btn btn-danger"
                        onClick={() => updateStudentCourses(course.courseId, 'drop')}
                    >
                        Dersi Bırak
                    </button>
                );
            } else {
                return (
                    <button
                        className="btn btn-primary"
                        onClick={() => updateStudentCourses(course.courseId, 'enroll')}
                    >
                        Dersi Al
                    </button>
                );
            }
        }
        return null;
    };

    const isCourseEnrolled = (courseId) => {
        return (
            student &&
            student.courses &&
            student.courses.some((course) => course.courseId === courseId)
        );
    };

    return (
        <div className="container">
            <h1>Kurs Listesi</h1>
            <div className="row">
                {courses.map((course) => (
                    <div key={course.courseId} className="col-md-4">
                        <div className="card">
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
