import React from 'react';
import './bloglist.scss'
import PropTypes from 'prop-types';

const BlogModel = ({ isOpen, onClose, children }) => {
  BlogModel.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.bool,
    children: PropTypes.any
 };
  if (!isOpen) return null;

  return (
    <div className="modal-overlay modalStyle">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="iconStyle w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default BlogModel;
