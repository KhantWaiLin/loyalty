import React, { useEffect, useContext } from "react";
import { LanguageContext } from "../../../LanguageContext";
import terms from "./terms.json";

const headingStyle = {
  textAlign: 'center',
  marginTop: '23px',
  fontFamily: "'Poppins', sans-serif",
  fontSize: '16px',
  color: "#48505E"
};

const iconStyle = {
  position: 'absolute',
  left: '17px',
  top: '30px',
  backgroundColor: '#FAFAFA',
  padding: '10px',
  border: '1px',
  borderRadius: '5px',
};

const TermsConditions = () => {
  const { t, changeLanguage } = useContext(LanguageContext);

  useEffect(() => {
    changeLanguage(localStorage.getItem("language"));
}, []);

  return (
    <div style={{fontFamily: "'Poppins', sans-serif",}} className="text-black-500 text-lg">
      <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
        <a style={iconStyle} href="/profile">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </a>
        <h1 style={headingStyle}>{t('terms')}</h1>
        <div style={{ marginTop: '5%', height: '80vh', overflow: 'auto', textAlign: 'justify', fontSize:'12px', color: "#48505E"}} className="no-scrollbar">
          <div style={{ marginTop: '5%' }}>{terms.versionAlertInfo}</div>
          <div>{terms.termsIntro.map((terms) => <div key={terms}>{terms}</div>)}</div>
          <br/>
          <div>{terms.termsQ1}</div>
          <div>{terms.termsA1.map((terms) => <div key={terms}><blockquote>{terms}</blockquote></div>)}</div>
          <br/>
          <div>{terms.termsQ2}</div>
          <div>{terms.termsA2}</div>
          <br/>
          <div>{terms.termsQ3}</div>
          <div>{terms.termsA3.map((terms) => <div key={terms}>{terms}</div>)}</div>
          <br/>
          <div>{terms.termsQ4}</div>
          <div>{terms.termsA4.map((terms) => <div key={terms}>{terms}</div>)}</div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
