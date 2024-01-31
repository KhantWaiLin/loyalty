import React from "react";

const BlogCard = ({ blog, onClick }) => {
  return (
    <div
      className="w-full h-full flex flex-col  justify-between items-center  
               relative bg-[#FFF] rounded-[20px] border-[1px] border-[#F0F1F3] p-[10px] cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-full bg-[#EBF2FF] rounded-lg">
        {blog?.image && (
          <img
            src={blog.image}
            alt="promotion-img"
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default BlogCard;
