import React from 'react';

const MyCourses = ({ student }) => {
    return (
        <div>
            <h1>My Courses</h1>
            {student && student.courses && student.courses.length > 0 ? (
                <ul>
                    {student.courses.map((course) => (
                        <li key={course.courseId}>
                            <h3>{course.courseName}</h3>
                            <p>{course.courseCode}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No courses selected.</p>
            )}
        </div>
    );
};

export default MyCourses;
