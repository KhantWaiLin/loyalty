// BlogListCard.js

import React from "react";
import Like from "../assets/icons/like-icon.svg";
import Comment from "../assets/icons/comment-icon.svg";

const cardStyle = {
  width: '420px',
  height: '220px',
  border: '1px solid #F0F1F3',
  borderRadius: '20px',
  padding: '10px',
};

const BlogListCard = ({ blog, onClick }) => {
  return (
    <div
      className="w-full h-full flex flex-col justify-between items-center relative bg-[#FFF] rounded-[20px] border-[1px] border-[#F0F1F3] p-[10px] cursor-pointer"
      onClick={onClick}
      style={cardStyle}
    >
      <div className="h-[180px] w-full">
        <img
          src={blog.image}
          alt="blog image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full flex flex-col gap-1 p-4">
        <div className="w-full flex flex-col gap-1">
          <h4 className="w-full text-lg md:text-xl lg:text-xl font-medium leading-6 justify-start">
            {blog.title}
          </h4>
          <p className="text-[#858D9D] leading-4 text-sm md:text-base lg:text-sm font-normal">
            {blog?.description}
          </p>
        </div>
        <div className="w-full flex justify-start items-center gap-5">
          <div className="flex items-center gap-2">
            <button className="w-5 h-5">
              <img src={Like} alt="Like Icon" className="w-full h-full" />
            </button>
            <p className="text-[#667085] text-sm md:text-base lg:text-lg">{blog?.likes}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-5 h-5">
              <img src={Comment} alt="Comment Icon" className="w-full h-full" />
            </button>
            <p className="text-[#667085] text-sm md:text-base lg:text-lg">{blog?.comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListCard;
