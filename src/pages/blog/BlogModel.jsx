import React from 'react';

const modalStyle = {
  position: 'absolute',
  width: '98%',
  height: '88%',
  top: '5%',
  left: '2%',
  backgroundColor: 'white',
}

const iconStyle = {
  backgroundColor: '#FAFAFA',
  padding: '8px',
  border: '1px',
  borderRadius: '5px'
}

const BlogModel = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={modalStyle}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default BlogModel;
