import React from "react";

const cardStyle = {
  width: '388px',
  height: '220px',
  border: '1px solid #F0F1F3',
  borderRadius: '20px',
  padding: '10px',
};

const imageSectionStyle = {
  width: '368px',
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
        {formatDate(blog?.startDate)}
      </p>
    </a>
  );
}

export default BlogListCard;
