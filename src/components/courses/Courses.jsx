import { useState } from "react";
import Course from "../course/Course";
import { useEffect } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="grid grid-cols-3 justify-center items-center">
      {courses.map((course, idx) => (
        <Course key={idx} course={course}></Course>
      ))}
    </div>
  );
};

export default Courses;
