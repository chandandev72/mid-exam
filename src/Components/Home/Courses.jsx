import Button from "../Button/Button";
import { Link } from "react-router-dom";
import SingleCourse from "./SingleCourse";
import LatestPost from "./LatestPost";
import { useEffect, useState } from "react";

const Courses = ({ data }) => {
  const [courseData, setCourseData] = useState([])
  useEffect(() => {
    const sliceData = data.slice(0, 6);
    setCourseData(sliceData)
  }, [])
  return (
    <div className="mt-5 p-2 text-light" style={{background: "rgb(0,0,0, .6)"}}>
      <div className="flex justify-between items-center pt-3 pb-2">
        <div>
          <h2 className="text-2xl ml-2 text-themeColor">Popular Courses</h2>
        </div>
        <div>
          <Link to={"/courses"}>
            <Button text={"See More"}></Button>
          </Link>
        </div>
      </div>
      <hr className="my-3 border-themeColor sm:mx-auto dark:border-themeColor3 lg:my-4" />
      <div className="flex gap-3">
        <div className="grid md:w-3/4 sm:w-2/3 w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <SingleCourse data={courseData} />
        </div>
        <div className="md:w-1/4 sm:w-1/3 hidden sm:block">
          <div className="text-themeColor text-xl">Latest Post</div>
          <hr className="my-3 border-themeColor sm:mx-auto dark:border-themeColor3 lg:my-4" />
          {<LatestPost data={courseData}/>}
        </div>
      </div>
    </div>
  );
};

export default Courses;
