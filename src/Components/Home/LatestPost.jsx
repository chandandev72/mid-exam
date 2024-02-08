import React from "react";
import { Link } from "react-router-dom";

const LatestPost = ({ data }) => {
  return data?.map((course) => (
    <div key={course.id} className="flex justify-start gap-2 items-center mb-3">
      <div>
        <img
          className="max-w-20 rounded-lg object-cover"
          src={course.image}
          alt=""
        />
      </div>
      <Link to={`/course-details/${course.id}`} className="truncate hover:underline">
        {course.title}
      </Link>
    </div>
  ));
};

export default LatestPost;
