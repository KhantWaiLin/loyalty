import React from 'react';
import { useNavigate } from 'react-router-dom';

const modalStyle = {
  position: 'absolute',
  top: '80%',
  width: '100%',
  height: '20%',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const btnStyle = {
  width: '90%',
  border: 'none',
  padding: '10px',
  textAlign: 'center',
  fontWeight: 'bold',
  borderRadius: '6px',
  cursor: 'pointer',
  margin: '5px 0',
  backgroundColor: '#F0F1F3',
};

const blueBtnStyle = {
  ...btnStyle,
  backgroundColor: 'blue',
  opacity: '0.5',
  color: 'white'
};

const IntroModal = () => {
  const navigate = useNavigate();

  return (
    <div id='modal' className="modal-overlay" style={modalStyle}>
      <div className="modal-content" style={{margin:'5%', marginLeft:'10%'}}>
        <button style={blueBtnStyle} onClick={() => navigate('/login')}>Login</button>
        <button style={btnStyle} onClick={() => navigate('/register')}>Sign Up</button>
      </div>
    </div>
  );
};

export default IntroModal;
