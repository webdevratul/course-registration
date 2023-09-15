import CourseMenu from "../courseMenu/CourseMenu";
import Courses from "../courses/Courses";

const Main = () => {
  return (
    <>
      <div className="w-[90%] mx-auto flex">
        <div className="w-[80%] m-4">
          <Courses></Courses>
        </div>
        <div className="w-[20%] bg-slate-500 m-4 rounded-lg">
          <CourseMenu></CourseMenu>
        </div>
      </div>
    </>
  );
};

export default Main;
