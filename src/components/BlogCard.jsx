import React from "react";

import Like from "../assets/icons/like-icon.svg";
import Comment from "../assets/icons/comment-icon.svg";
import DefaultImage from "../assets/images/blog_default_img.png";

const MAX_WORDS = 80;

const BlogCard = ({ blog, onClick }) => {
  return (
    <div
      className="w-full h-full flex flex-col  justify-between items-center  
               relative bg-[#FFF] rounded-[20px] border-[1px] border-[#F0F1F3] p-[10px] cursor-pointer"
      onClick={onClick}
    >
      <div className="h-[180px] w-full">
        {blog?.image ? (
          <img
            src={blog?.image}
            alt="promotion-img"
            className="w-full h-full object-contain rounded-lg"
          />
        ) : (
          <img
            src={DefaultImage}
            alt="promotion-img"
            className="w-full h-full object-contain rounded-lg"
          />
        )}
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="w-full flex flex-col gap-1">
          <h4 style={{fontFamily: "'Poppins', sans-serif"}} className="w-full text-[14px] font-medium leading-6 justify-start">
            {blog?.title?.length > MAX_WORDS
              ? blog?.title?.slice(0, MAX_WORDS) + "..."
              : blog?.title}
          </h4>
          <p className="text-[#858D9D] leading-6 text-[12px] font-normal">
            {blog?.time} {blog?.posted_by}
          </p>
        </div>
        <div className="w-full flex justify-start items-center gap-5">
          <div className="flex items-center gap-2">
            <button className="w-5 h-5">
              <img src={Like} alt="like-icon" className="w-full h-full" />
            </button>
            <p className="text-[#667085] text-[12px]">{blog?.likes}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-5 h-5">
              <img src={Comment} alt="like-icon" className="w-full h-full" />
            </button>
            <p className="text-[#667085] text-[12px]">{blog?.comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
