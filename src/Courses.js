import React from 'react'
import "./Courses.css";
function Courses() {
    return (
        <div className="courses">
            <div className="courses_title">
                <div className="coursestitles">Courses</div>
                
                <div className="courses_image"><img src="https://scholarship-positions.com/wp-content/uploads/2016/10/Free-Online-Course-1024x684.jpg" alt="" /></div>
                
            </div>
            <div className="course_column">
                <div className="course_row">Pollination</div>
                <div className="course_row">Periodic Table</div>
                <div className="course_row">Density</div>
                <div className="course_row">Cell Biology</div>
                <div className="course_row">Data Structures</div>
                <div className="course_row">Electromagnetics</div>
                <div className="course_row">Russian History</div>
                <div className="course_row">Judicial System</div>
            </div>
        </div>
    )
}

export default Courses
