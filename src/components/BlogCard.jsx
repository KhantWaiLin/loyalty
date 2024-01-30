import React from "react";

const BlogCard = ({ name, desc }) => {
  return (
    <div className="w-full h-full bg-gray-300 rounded-lg p-3 cursor-pointer">
      <h1 className="text-black text-[16px]">{name}</h1>
      <p className="text-black text-[14px]">{desc}</p>
    </div>
  );
};

export default BlogCard;
