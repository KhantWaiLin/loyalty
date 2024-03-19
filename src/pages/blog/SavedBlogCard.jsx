import React from "react";

const cardStyle = {
  display: 'flex',
  width: '98%',
  height: '120px',
  border: '1px solid #F0F1F3',
  borderRadius: '20px',
  padding: '10px',
};

const imageSectionStyle = {
  flex: '2',
  marginRight: '10px',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '8px',
  objectFit: 'cover',
};

const textSectionStyle = {
  flex: '4',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

function SavedBlogCard({ blog, link }) {
  const url = '/blog/';

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <a href={url + blog?.blogId} style={{...cardStyle,fontFamily: "'Poppins', sans-serif"}}>
      <div style={imageSectionStyle}>
        <img
          style={imageStyle}
          src={blog?.image}
          alt="Card Image"
        />
      </div>
      <div style={textSectionStyle}>
        <p className="text-base font-normal not-italic text-[#48505E]">
          {blog?.title}
        </p>
        <p className="text-sm font-normal mt-[8px] not-italic text-[#989FAD]">
          {blog?.createdDate} by {blog?.author}
        </p>
      </div>
    </a>
  );
}

export default SavedBlogCard;
