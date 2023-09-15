const Course = ({ course }) => {
  const { image, course_name, details, credit, price } = course;
  return (
    <div className="bg-[#fff] m-4 p-4 rounded-xl">
      <img className="w-full" src={image} alt="" />
      <h2 className="text-2xl font-bold my-6 text-[#1C1B1B]">{course_name}</h2>
      <p className="text-[#737272] text-[18px]">{details}</p>
      <div className="flex my-6 text-xl text-[#737272] justify-center">
        <p>
          <span className="text-black mr-3 text-2xl font-bold">$</span> Price:{" "}
          {price}
        </p>
        <p>
          <span className="text-black ml-4 mr-3 text-2xl font-bold">
            <i className="fa-solid fa-book-open"></i>
          </span>
          Credit: {credit}hr
        </p>
      </div>
      <div className="ml-1">
        <button className="py-2 px-40 rounded-lg bg-[#2F80ED] text-[#fff] font-bold">
          Select
        </button>
      </div>
    </div>
  );
};

export default Course;
