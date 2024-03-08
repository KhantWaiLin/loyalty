import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../../api/api";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";

import Phone from "../../../assets/images/phone.svg";
import PhoneIcon from "../../../assets/icons/phon.svg";

import Loader from "../../../components/loader/Loader";
import "./ChangeNumber.scss";

import { LanguageContext } from "../../../LanguageContext";

const iconStyle = {
  position: 'absolute',
  left: '15px',
  top: '52px',
  backgroundColor: '#FAFAFA',
  padding: '8px',
  border: '1px solid #ddd',
  borderRadius: '5px'
}

const inputContainerStyle = {
  width: '90%',
  position: 'absolute',
  top: '20%',
  left: '5%'
};

const headingStyle = {
  position: 'absolute',
  left: '50%',
  top: '60px',
  transform: 'translateX(-50%)',
  fontSize: '16px',
}

const inputContainerStyle2 = {
  width: '90%',
  position: 'absolute',
  top: '20%',
  left: '5%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const countStyle = {
  position: 'absolute',
  top: '25%',
  left: '50%'
}

const opt_des = {
  position: 'absolute',
  top: '15%',
}

const otpInputStyle = {
  width: '50px',
  height: '50px',
  textAlign: 'center',
  marginLeft: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  borderBottom: '1px solid #000',
  opacity: '0.5'
};

const activeInputStyle = {
  borderBottomColor: 'blue',
};

const inputBoxStyle = {
  width: '100%',
  border: 'none',
  borderBottom: '1px solid #48505E',
  padding: '8px',
  fontSize: '14px',
  margin: '8px 0',
  outline: 'none',
};

const phoneIconStyle = {
  position: 'absolute',
  top: '65%',
  right: '8px',
  transform: 'translateY(-50%)',
  color: '#333',
}

const buttonStyle = {
  width: '90%',
  padding: '10px',
  backgroundColor: 'blue',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  position: 'absolute',
  top: '90%',
  left: '5%'
};

const ChangeNumber = () => {
  const { t, changeLanguage } = useContext(LanguageContext);
  const [isLoading, setIsLoading] = useState(false);
  const [activeInputIndex, setActiveInputIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("tab 1");
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(60);
  const [profile, setProfile] = useState(null);

  const { get_member_info, change_number, send_otp } = api_routes;
  const { brand_id, user_id } = getUserBrandMemberId();

  const navigate = useNavigate();

  const get_profile_detail = async () => {
    setIsLoading(true);
    await api
      .get(get_member_info, { brandId: brand_id, userId: user_id })
      .then((response) => {
        setProfile(response?.data?.value?.data);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    get_profile_detail();
    changeLanguage(localStorage.getItem("language"));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    
    let timer;

    if (activeTab === "tab 3" && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [activeTab, countdown]);

  const on_send_otp = async () => {
    setIsLoading(true);
    const data = {
      isForget: false,
      Phone: number,
      userType: 2,
    };
    await api.postOtp(send_otp, data).then((response) => {
      if (response?.data?.code === 200) {
        setCountdown(60);
        setActiveTab("tab 3");
      }
      setIsLoading(false);
    });
  };

  const on_update_number = async () => {
    setIsLoading(true);
    const data = {
      otp: otp.join(""),
      phoneNo: number,
      userId: user_id,
    };
    await api.postByBody(change_number, data).then((response) => {
      console.log(response?.data);
      if (response?.data?.value?.code === 200) {
        navigate("/profile");
      }
      setIsLoading(false);
    });
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < otp.length - 1 && value !== "") {
        document.getElementById(`otp-input-${index + 1}`).focus();
        setActiveInputIndex((index + 1));
      } else if (index > 0 && value === "") {
        document.getElementById(`otp-input-${index + -1}`).focus();
        setActiveInputIndex((index - 1));
      }
    }
  };

  const on_change_number = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNumber(value);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-full items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      {activeTab === "tab 1" && (
        <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
          <a style={iconStyle} href="/profile">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </a>
          <div style={headingStyle}>{t('changeNumber')}</div>
          <img src={Phone} width="30%" height="60%" style={{ marginTop: "50%", marginLeft: '35%' }} />
          <h2 className="text-[16px]" style={{ textAlign: 'center', marginTop: '10px' }}>{profile?.phoneNo}</h2>
          <p style={{ textAlign: 'center', fontSize: '12px' }}>{t('chNumberNote')}</p>
          <button style={buttonStyle} onClick={() => setActiveTab("tab 2")}>{t('changeNumber')}</button>
        </div>
      )}
      {activeTab === "tab 2" && (
        <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
          <button style={iconStyle} onClick={() => setActiveTab("tab 1")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div style={headingStyle}>{t('changeNumber')}</div>
          <div style={inputContainerStyle}>
            <div style={{ fontSize: '14px' }}>{t('newNumber')}</div>
            <input type="text" placeholder="Enter New Phone Number" style={inputBoxStyle} name="phoneNo" value={number} onChange={on_change_number} />
            <span style={phoneIconStyle}><img src={PhoneIcon} /></span>
          </div>
          <button style={buttonStyle} onClick={on_send_otp}>{t('update')}</button>
        </div>
      )}

      {activeTab === "tab 3" && (
        <>
          <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
            <button style={iconStyle} onClick={() => setActiveTab("tab 1")}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div style={headingStyle}>{t('verification')}</div>
            <p style={opt_des}>
              Enter the 6-digit codes sent to {number}
            </p>
            <div style={inputContainerStyle2}>
              {otp.map((digit, index) => (
                <input
                  type="text"
                  id={`otp-input-${index}`}
                  key={index}
                  value={digit}
                  onChange={(e) => handleInputChange(e, index)}
                  maxLength="1"
                  style={{ ...otpInputStyle, ...(activeInputIndex === index ? activeInputStyle : {}) }}
                // className="w-[50px] text-center flex justify-center h-[50px] shadow-lg focus:outline-none border-gray border-[1px] rounded-lg"
                />
              ))}
            </div>
            <div style={countStyle} className="countdown-timer flex justify-end mt-4 text-[#48505E]">
              {countdown > 0 ? (
                <p className="text-[14px] font-normal">{`Request new code in ${countdown}s`}</p>
              ) : (
                <button
                  className="resend-btn text-white ml-10 font-medium rounded-lg px-4 py-2 bg-blue-500"
                  type="button"
                  onClick={on_send_otp}
                >
                  Resend OTP
                </button>
              )}
            </div>
            <button style={buttonStyle} onClick={on_update_number}>{t('verification1')}</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChangeNumber;
