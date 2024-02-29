import React, {useState} from "react";
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

const buttonStyle = {
  background: 'blue',
  color: '#fff',
  opacity: '0.7',
  textAlign: 'left',
  padding: '10px',
  marginTop: '5px',
  borderRadius: '8px',
  marginBottom: '10px',
}

const TermsConditions = () => {
  const [activeTab, setActiveTab] = useState("tab 1");

  return (
    <div className="text-black-500 text-lg">
      {activeTab === "tab 1" && (
        <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
          <a style={iconStyle} href="/profile">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </a>
          <h1 style={headingStyle}>Terms&Conditions</h1>
          <div style={{ marginTop: '10%' }}>{terms.versionAlertInfo}</div>
          <div>{terms.termsIntro.map((terms) => <div>{terms}</div>)}</div>
          <a style={{textDecoration:'underline', color:'blue'}} onClick={() => setActiveTab("tab 2")}>More</a>
        </div>
      )}
      {activeTab === "tab 2" && (
        <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
          <a style={iconStyle} onClick={() => setActiveTab("tab 1")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </a>
          <h1 style={headingStyle}>Terms&Conditions Q&A</h1>
            <div style={buttonStyle}>
              <div style={{ marginBottom: '5px' }}>
                Q: {terms.termsQ1}<br/>
                A: {terms.termsA1}
              </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default TermsConditions;
