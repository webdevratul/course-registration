import { useEffect, useState } from "react";
import CourseMenu from "../courseMenu/CourseMenu";
import Courses from "../courses/Courses";
import Swal from "sweetalert2";

const Main = () => {
  const [courses, setCourses] = useState([]);
  const [courseMenus, setCourseMenu] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = courseMenus.find((item) => item.id === course.id);

    let count = course.credit;

    if (isExist) {
      return Swal.fire({
        title: "Error!",
        text: "This course is already selected try to another one.",
        icon: "error",
        confirmButtonText: "Clear",
      });
    } else {
      courseMenus.forEach((item) => {
        count += item.credit;
      });

      let totalRemaining = 20 - count;

      if (count > 20) {
        return Swal.fire({
          title: "Error!",
          text: "Course Credit Exceed",
          icon: "error",
          confirmButtonText: "Clear",
        });
      } else {
        setTotalCredit(count);
        setRemaining(totalRemaining);
        const newCourseMenu = [...courseMenus, course];
        setCourseMenu(newCourseMenu);
      }
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
          <CourseMenu
            courseMenus={courseMenus}
            remaining={remaining}
            totalCredit={totalCredit}
          ></CourseMenu>
        </div>
      </div>
    </>
  );
};

export default Main;
