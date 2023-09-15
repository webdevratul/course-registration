import Swal from "sweetalert2";
const CourseMenu = ({ courseMenus }) => {
  let credit = [];
  let totalCredit = 0;

  if (courseMenus.length > 0) {
    courseMenus.forEach((course) => {
      credit.push(course.credit);
      totalCredit += course.credit;
    });
  }

  const exceedCredit = totalCredit > 20;

  if (exceedCredit) {
    Swal.fire({
      title: "Error!",
      text: "Course Credit Exceed",
      icon: "error",
      confirmButtonText: "Clear",
    });
  }

  return (
    <div className="bg-white p-6 rounded-xl mt-4">
      <h2 className="text-[#2F80ED] text-xl font-bold">
        Credit Hour Remaining {exceedCredit ? 0 : 20 - totalCredit} hr
      </h2>
      <hr className="my-4" />
      <h2 className="text-xl font-bold mb-4">Course Name</h2>
      {courseMenus.map((course, idx) => (
        <div key={idx}>
          <h2 className="my-2 text-[#1C1B1B]">
            {idx + 1}. {course.course_name}
          </h2>
        </div>
      ))}
      <hr className="my-4" />
      <h2>Total Credit Hour: {exceedCredit ? 0 : totalCredit}</h2>
    </div>
  );
};

export default CourseMenu;
