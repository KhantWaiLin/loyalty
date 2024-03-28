import React, { useEffect, useContext } from "react";
import { LanguageContext } from "../../../LanguageContext";
import terms from "./terms.json";
import './termscondition.css';

const headingStyle = {
  textAlign: 'center',
  marginTop: '23px',
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
    <div className="text-black-500 text-lg">
      <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
        <a style={iconStyle} href="/profile">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </a>
        <h1 style={headingStyle}>{t('terms')}</h1>
        <div style={{ overflow: 'auto', textAlign: 'justify', fontSize: '12px', color: "#48505E" }} className="no-scrollbar">
          <div class="section">
            <h2 className="highlight">Collection of Your Information</h2>
            <p>We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our mobile application. By accessing the application, you agree to the terms outlined in this Privacy Policy. If you do not agree, please refrain from using the application.</p>
            <div className="sub-section">
              <h2 className="highlight">Personal Data</h2>
              <p>This includes demographic and personally identifiable information (such as your name) that you voluntarily provide when engaging in activities within the application, such as posting comments. Please note that any data you share in public areas of the application, such as your profile or interactive sections, may be accessible to other users.</p>
            </div>
            <div className="sub-section">
              <h2 className="highlight">Mobile Device Access</h2>
              <p>We may request access to certain features on your mobile device to enhance your experience with the application.</p>
            </div>
            <div className="sub-section">
              <h2 className="highlight">Camera and Photos</h2>
              <p>Our serices require us to scan QR code from your device's camera and to upload profile picture
from your device's camera and photos. For example, you won't be able to send snaps or upload photos from your camera roll unless we can access your camera or photos.</p>
            </div>
            <div className="sub-section">
              <h2 className="highlight">Push Notifications</h2>
              <p>With your permission, we may send you push notifications regarding your account or updates to the application. You have the option to opt-out of these notifications in your device settings.</p>
            </div>
            <div className="sub-section">
              <h2 className="highlight">USE OF YOUR INFORMATION</h2>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:
                Fulfill and manage purchases, payments, and other transactions related to the Application.
                Notify you of updates to the Application.
                Process payments and refunds.
              </p>
            </div>
            <div className="sub-section">
              <h2 className="highlight">TRACKING TECHNOLOGIES</h2>
              <h3 className="highlight">Cookies</h3>
              <p>
                We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Application to help customize the Application and improve your experience. When you access the Application, your personal information is not collected through the use of tracking technology.
              </p>
            </div>
            <div className="sub-section">
              <h2 className="highlight">SECURITY OF YOUR INFORMATION</h2>
              <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
