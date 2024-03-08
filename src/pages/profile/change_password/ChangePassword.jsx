import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import View from "../../../assets/icons/view.svg";

import { api_routes } from "../../../utils/apiRoute";
import api from "../../../api/api";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";

import "./ChangePassword.scss";
import Loader from "../../../components/loader/Loader";

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

const inputBoxStyle = {
  width: '100%',
  border: 'none',
  borderBottom: '1px solid #48505E',
  padding: '8px',
  fontSize: '14px',
  margin: '8px 0',
  outline: 'none',
};

const viewStyle = {
  position: 'absolute',
  top: '22%',
  right: '8px',
  transform: 'translateY(-50%)',
  color: '#333',
}

const viewStyle1 = {
  position: 'absolute',
  top: '55%',
  right: '8px',
  transform: 'translateY(-50%)',
  color: '#333',
}

const viewStyle2 = {
  position: 'absolute',
  top: '90%',
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

const ChangePassword = () => {
  const { t, changeLanguage } = useContext(LanguageContext);
  const [isLoading, setIsLoading] = useState(true);
  const { get_member_info, change_password } = api_routes;
  const navigate = useNavigate();
  const { brand_id, user_id } = getUserBrandMemberId();
  const [passwords, setPasswords] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const get_profile_detail = async () => {
    setIsLoading(true);
    await api.get(get_member_info, { brandId: brand_id, userId: user_id });
    setIsLoading(false);
  };
  useEffect(() => {
    get_profile_detail();
    changeLanguage(localStorage.getItem("language"));
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmit = () => {
    const data = {
      userId: user_id,
      oldPassword: passwords.current_password,
      newPassword: passwords.new_password,
      confirmPassword: passwords.confirm_password,
    };
    api.postByBody(change_password, data).then((response) => {
      if (response?.data?.value?.code === 200) {
        return navigate("/profile");
      }
    });
  };

  const passwordView = (idName) => {
    let viewToggle = document.getElementById(idName);
    if (viewToggle.type == "password") {
      viewToggle.type = "text"
    } else {
      viewToggle.type = "password"
    }
  }

  if (isLoading) {
    return (
      <div className="change-password-wrapper items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
        <a style={iconStyle} href="/profile">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </a>
        <div style={headingStyle}>{t('changePassword')}</div>
        <div style={inputContainerStyle}>
          <div style={{ fontSize: '14px' }}>{t('currentP')}</div>
          <input id="password" type="password" placeholder="Enter Current Password" style={inputBoxStyle} name="current_password" value={passwords.current_password} onChange={onChange} />
          <span style={viewStyle} onClick={() => passwordView("password")}>
            <img src={View} style={{ width: "16px", height: '16px' }} />
          </span>
          <div style={{ fontSize: '14px' }}>{t('newP')}</div>
          <input id="password1" type="password" placeholder="Enter New Password" style={inputBoxStyle} name="new_password" value={passwords.new_password} onChange={onChange} />
          <span style={viewStyle1} onClick={() => passwordView("password1")}>
            <img src={View} style={{ width: "16px", height: '16px' }} />
          </span>
          <div style={{ fontSize: '14px' }}>{t('confirmP')}</div>
          <input id="password2" type="password" placeholder="Enter Confirm Password" style={inputBoxStyle} name="confirm_password" value={passwords.confirm_password} onChange={onChange} />
          <span style={viewStyle2} onClick={() => passwordView("password2")}>
            <img src={View} style={{ width: "16px", height: '16px' }} />
          </span>
        </div>
        <button style={buttonStyle} onClick={onSubmit}>{t('update')}</button>
      </div>
    </>
  );
};

export default ChangePassword;
