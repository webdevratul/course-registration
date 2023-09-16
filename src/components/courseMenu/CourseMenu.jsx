const CourseMenu = ({ courseMenus, remaining, totalCredit }) => {
  console.log(courseMenus);
  return (
    <div className="bg-white p-6 rounded-xl mt-4">
      <h2 className="text-[#2F80ED] text-xl font-bold">
        Credit Hour Remaining {remaining} hr
      </h2>
      <h2 className="text-xl font-bold my-4">Course Name</h2>
      {courseMenus.map((menu, idx) => (
        <div key={idx}>
          <h2 className="my-2 text-[#1C1B1B]">
            {idx + 1}.{menu.course_name}
          </h2>
        </div>
      ))}
      <hr />
      <h2 className="my-4 font-bold text-xl text-[#474747]">Total Credit: {totalCredit} hr</h2>
    </div>
  );
};

export default CourseMenu;
