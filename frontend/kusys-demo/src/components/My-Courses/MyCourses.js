import React from 'react';

const MyCourses = ({ student }) => {
    return (
        <div>
            <h1 className='my-5 text-center fw-bold'>MY COURSES</h1>
            {student && student.courses && student.courses.length > 0 ? (
                // Öğrencinin dersleri varsa
                <div className="container ourse-list d-flex justify-content-center align-items-center gap-5 my-5 flex-wrap">
                    {student.courses.map((course) => (
                        // Her ders için bir kart oluştur
                        <div key={course.courseId} className="card" style={{ width: '18rem' }}>
                            <img src={course.img} className="card-img-top" alt={course.courseName} />
                            <div className="card-body">
                                <h5 className="card-title">{course.courseName}</h5>
                                <p className="card-text">{course.courseCode}</p>
                                <a href="" className="btn btn-primary">View Details</a>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                // Öğrencinin seçili dersi yoksa
                <p>No courses selected.</p>
            )}
        </div>
    );
};

export default MyCourses;
