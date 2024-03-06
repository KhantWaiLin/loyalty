import US from "../../../assets/icons/US.svg";
import MM from "../../../assets/icons/myanmar.svg";
import React, { useContext, useState } from "react";
import { LanguageContext } from "../../../LanguageContext";

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

const selectSectionStyle = {
  marginTop: '10%',
  textAlign: 'center',
};

const selectStyle = {
  width: '80%',
  padding: '10px',
  paddingLeft: '40px',
  borderRadius: '10px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '15px center',
  appearance: 'none',
  backgroundSize: '20px',
};

const Language = () => {
  const { t, changeLanguage } = useContext(LanguageContext);
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language'));

  const getFlagImage = () => {
    switch (selectedLanguage) {
      case 'en':
        return `url(${US})`;
      case 'mm':
        return `url(${MM})`;
      default:
        return `url(${US})`;
    }
  };

  const handleChangeLanguage = (event) => {
    const selectedLang = event.target.value;
    localStorage.setItem('language', selectedLang);
    setSelectedLanguage(selectedLang);
    changeLanguage(selectedLang);
  };

  return (
    <div className="text-black-500 text-lg">
      <a style={iconStyle} href="/profile">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </a>
      <h1 style={headingStyle}>{t('key')}</h1>

      <div style={selectSectionStyle}>
        <select style={{ ...selectStyle, backgroundImage: getFlagImage() }} value={selectedLanguage} onChange={handleChangeLanguage}>
          <option value="en">English</option>
          <option value="mm">Myanmar</option>
        </select>
      </div>
    </div>
  );
};

export default Language;
