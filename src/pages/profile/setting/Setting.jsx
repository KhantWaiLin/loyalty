import React, { useState, useContext, useEffect } from "react";
import "./Setting.css";
import { LanguageContext } from "../../../LanguageContext";

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
  top: '20px',
  backgroundColor: '#FAFAFA',
  padding: '10px',
  border: '1px',
  borderRadius: '5px',
};

const sectionStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '15px 0',
  fontSize: '14px',
  width: '90%'
};

const wholeSection = {
  marginTop: '44px',
  marginLeft: '15px',
}

const Setting = () => {
  const { t, changeLanguage } = useContext(LanguageContext);
  const [notification1, setNotification1] = useState(false);
  const [notification2, setNotification2] = useState(false);

  useEffect(() => {
    changeLanguage(localStorage.getItem("language"));
  }, []);

  return (
    <div className="text-black-500 text-lg">
      <a style={iconStyle} href="/profile">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </a>
      <h1 style={headingStyle}>{t('setting')}</h1>
      <div style={wholeSection}>
        <div style={sectionStyle}>
          <div>{t('receiveNoti')}</div>
          <label className="switch">
            <input
              type="checkbox"
              checked={notification1}
              onChange={() => setNotification1(!notification1)}
            />
            <span className="slider"></span>
          </label>
        </div>
        <hr style={{ opacity: '0.5' }} />
        <div style={sectionStyle}>
          <div>{t('receiveEmail')}</div>
          <label className="switch">
            <input
              type="checkbox"
              checked={notification2}
              onChange={() => setNotification2(!notification2)}
            />
            <span className="slider"></span>
          </label>
        </div>
        <hr style={{ opacity: '0.5' }} />
      </div>
    </div>
  );
};

export default Setting;
