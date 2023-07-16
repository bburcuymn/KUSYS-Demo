import React from 'react';

const CoursesList = ({ courses }) => {
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursesList;
