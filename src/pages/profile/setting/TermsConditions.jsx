import React from "react";

const headingStyle = {
  textAlign: 'center',
  marginTop: '23px',
};

const iconStyle = {
  position: 'absolute',
  left: '17px',
  top: '20px',
  backgroundColor: '#FAFAFA',
  padding: '8px',
  border: '1px',
  borderRadius: '5px',
};

const TermsConditions = () => {

  return (
    <div className="text-black-500 text-lg">
      <a style={iconStyle} href="/profile">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </a>
      <h1 style={headingStyle}>Terms&Conditions</h1>
    </div>
  );
};

export default TermsConditions;
