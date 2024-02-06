import React from 'react';

const modalStyle = {
  position : 'absolute',
  width : '96%',
  height : '90%',
  top : '5%',
  left : '2%',
  backgroundColor : 'white',
  overflow : 'auto'
}

const BlogModel = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={modalStyle}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default BlogModel;
