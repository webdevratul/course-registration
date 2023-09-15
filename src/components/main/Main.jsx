import { useEffect, useState } from "react";
import CourseMenu from "../courseMenu/CourseMenu";
import Courses from "../courses/Courses";
import Swal from "sweetalert2";

const Main = () => {
  const [courses, setCourses] = useState([]);
  const [courseMenus, setCourseMenu] = useState([]);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = courseMenus.find((item) => item.id === course.id);
    if (isExist) {
      Swal.fire({
        title: "Error !",
        text: "This Course is already seleted !",
        icon: "error",
        confirmButtonText: "Clear",
      });
    } else {
      const newCourseMenu = [...courseMenus, course];
      setCourseMenu(newCourseMenu);
    }
  };

  return (
    <>
      <div className="w-[90%] mx-auto flex">
        <div className="w-[80%] m-4 grid grid-cols-3">
          {courses.map((course, idx) => (
            <Courses
              key={idx}
              course={course}
              handleSelectCourse={handleSelectCourse}
            ></Courses>
          ))}
        </div>
        <div className="w-[20%] m-4 rounded-lg">
          <CourseMenu courseMenus={courseMenus}></CourseMenu>
        </div>
      </div>
    </>
  );
};

export default Main;
