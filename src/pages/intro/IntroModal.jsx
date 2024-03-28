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
  backgroundColor: '#F8F8FF',
  fontSize: '16px',
  fontFamily: "'Poppins', sans-serif",
  color: "#48505E"
};

const blueBtnStyle = {
  ...btnStyle,
  // backgroundColor: '#0080FF',
  background: 'linear-gradient(213deg, #384bca 19.49%, #7b8cff 194.01%)',
  color: 'white'
};

const IntroModal = () => {
  const navigate = useNavigate();

  return (
    <div id='modal' className="modal-overlay" style={modalStyle}>
      <div className="modal-content" style={{margin:'5%', textAlign:'center'}}>
        <button style={blueBtnStyle} onClick={() => navigate('/login')}>Login</button>
        <button style={btnStyle} onClick={() => navigate('/register')}>Sign Up</button>
      </div>
    </div>
  );
};

export default IntroModal;
