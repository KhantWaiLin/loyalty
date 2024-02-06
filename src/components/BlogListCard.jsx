import React from "react";
import Like from "../assets/icons/like-icon.svg";
import Comment from "../assets/icons/comment-icon.svg";

const cardStyle = {
  width: '388px',
  height: '240px',
  border: '1px solid #F0F1F3',
  borderRadius: '20px',
  padding: '10px',
};

const imageSectionStyle = {
  width: '80%',
  height: '140px',
  borderRadius: '8px',
  overflow: 'hidden',
  objectFit: 'cover',
};

function BlogListCard({ blog, link }) {
  const url = '/blog/';

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <a href={url+link} style={cardStyle}>
      <div style={imageSectionStyle}>
        <img
          className="w-full h-full object-contain"
          src={blog?.image}
          alt="Card Image"
        />
      </div>
      <p className="text-base font-normal not-italic text-[#48505E]">
        {blog?.title}
      </p>
      <p className="text-sm font-normal mt-[8px] not-italic text-[#989FAD]">
        {blog?.createdDate} by {blog?.author}
      </p>
      <div className="w-full flex justify-start items-center gap-5">
          <div className="flex items-center gap-2">
            <button className="w-5 h-5">
              <img src={Like} alt="like-icon" className="w-full h-full" />
            </button>
            <p className="text-[#667085] text-[12px]">{blog?.likeCount}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-5 h-5">
              <img src={Comment} alt="like-icon" className="w-full h-full" />
            </button>
            <p className="text-[#667085] text-[12px]">Comment</p>
          </div>
        </div>
    </a>
  );
}

export default BlogListCard;
