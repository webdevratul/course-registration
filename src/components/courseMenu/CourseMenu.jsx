const CourseMenu = ({ courseMenus }) => {
  return (
    <div className="bg-white p-6 rounded-xl mt-4">
      <h2 className="text-[#2F80ED] text-xl font-bold">
        Credit Hour Remaining 7 hr
      </h2>
      <hr className="my-4" />
      <h2 className="text-xl font-bold mb-4">Course Name</h2>
      {courseMenus.map((course, idx) => (
        <h1 className="my-2 text-[#1C1B1B]" key={idx}>
          {idx + 1}.{course.course_name}
        </h1>
      ))}
      <hr className="my-4"/>
    </div>
  );
};

export default CourseMenu;
