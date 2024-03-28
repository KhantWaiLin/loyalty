import React from "react";
import PropTypes from 'prop-types';

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

function SavedBlogCard({ blog }) {
  const url = '/blog/';
  SavedBlogCard.propTypes = {
    blog: PropTypes.shape({
      blogId: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
      createdDate: PropTypes.string,
      author: PropTypes.string
    }),
  };

  return (
    <a href={url + blog?.blogId} style={cardStyle}>
      <div style={imageSectionStyle}>
        <img
          style={imageStyle}
          src={blog?.image}
          alt="Card"
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
