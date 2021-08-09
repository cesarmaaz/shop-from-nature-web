import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col justify-between items-center shadow-lg m-4 max-w-sm">
      <div className="text-left w-full px-8">
        <p className="text-red text-sm font-regular leading-5 pt-6">
          {blog.Date}
        </p>
        <h1 className="text-green text-2xl font-medium leading-7 py-3">
          {blog.title}
        </h1>
        <p className="text-red text-lg font-regular leading-7 pb-8">
          {blog.descp1}
        </p>
      </div>
      <Link to={`/blogdetails/${blog.id}`}>
        <button
          type="button"
          className=" bg-green text-center text-white text-sm w-28 h-12 rounded my-6"
        >
          Read More
        </button>
      </Link>
    </div>
  );
};

export default BlogCard;
