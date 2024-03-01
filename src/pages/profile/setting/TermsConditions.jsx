import React, { useState } from "react";
import terms from "./terms.json";

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
      <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
        <a style={iconStyle} href="/profile">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </a>
        <h1 style={headingStyle}>Terms&Conditions</h1>
        <div style={{ marginTop: '10%', height: '80vh', overflow: 'auto', textAlign: 'justify' }} className="no-scrollbar">
          <div style={{ marginTop: '10%' }}>{terms.versionAlertInfo}</div>
          <div>{terms.termsIntro.map((terms) => <div>{terms}</div>)}</div>
          <br/>
          <div>{terms.termsQ1}</div>
          <div>{terms.termsA1.map((terms) => <div><blockquote>{terms}</blockquote></div>)}</div>
          <br/>
          <div>{terms.termsQ2}</div>
          <div>{terms.termsA2}</div>
          <br/>
          <div>{terms.termsQ3}</div>
          <div>{terms.termsA3.map((terms) => <div>{terms}</div>)}</div>
          <br/>
          <div>{terms.termsQ4}</div>
          <div>{terms.termsA4.map((terms) => <div>{terms}</div>)}</div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
