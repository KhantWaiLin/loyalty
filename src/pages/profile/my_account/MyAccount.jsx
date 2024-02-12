import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./MyAccount.scss";
import Email from "../../../assets/icons/email.svg";
import User from "../../../assets/icons/user-icon.svg";
import Loader from "../../../components/loader/Loader";

import api from "../../../api/api";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";

const iconStyle = {
  position: 'absolute',
  left: '15px',
  top: '52px',
  backgroundColor: '#FAFAFA',
  padding: '8px',
  border: '1px solid #ddd',
  borderRadius: '5px'
}

const headingStyle = {
  position: 'absolute',
  left: '50%',
  top: '60px',
  transform: 'translateX(-50%)',
  fontSize: '16px',
}

const inputContainerStyle = {
  width: '90%',
  position: 'absolute',
  top: '20%',
  left: '5%'
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

const inputIconStyle = {
  position: 'absolute',
  top: '30%',
  right: '8px',
  transform: 'translateY(-50%)',
  color: '#333',
  color: 'blue'
};

const emailIconStyle = {
  position: 'absolute',
  top: '86%',
  right: '8px',
  transform: 'translateY(-50%)',
  color: '#333',
};

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

const MyAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [data, setData] = useState({
    name: null,
    email: null
  });

  const navigate = useNavigate();

  const { get_member_info, update_member_info } = api_routes;
  const { brand_id, user_id } = getUserBrandMemberId();

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdateClick = async () => {
    setIsLoading(true);
    try {
      await api.postByBody(update_member_info, 
        { 
          brandId: brand_id, 
          id: profile?.id, 
          image: null, 
          name: data?.name, 
          email: data?.email 
        });
      navigate("/profile");
    } catch (error) {
      console.error("Error updating data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const get_profile_detail = async () => {
    setIsLoading(true);
    try {
      const response = await api.get(get_member_info, { brandId: brand_id, userId: user_id });
      setProfile(response?.data?.value?.data);
      setData({
        name: response?.data?.value?.data?.name,
        email: response?.data?.value?.data?.email,
      });
    } catch (error) {
      console.error("Error fetching profile data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    get_profile_detail();
  }, []);

  if (isLoading && profile === null) {
    return (
      <div className="personal-information-wrapper items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll no-scrollbar">
      <a style={iconStyle} href="/profile">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </a>
      <div style={headingStyle}>My Account</div>
      <div style={inputContainerStyle}>
        <div style={{fontSize:'14px'}}>Username</div>
        <input type="text" style={inputBoxStyle} name="name" value={data.name} onChange={handleInputChange} />
        <span style={inputIconStyle}><img src={User} /></span>
        <br/><br/>
        <div style={{fontSize:'14px'}}>Email</div>
        <input type="text" style={inputBoxStyle} name="email" value={data.email} onChange={handleInputChange} />
        <span style={emailIconStyle}>
          <img src={Email} style={{width: "16px", height: '16px'}}/>
        </span>
      </div>
      <button style={buttonStyle} onClick={handleUpdateClick}>Update</button>
    </div>
  );
};

export default MyAccount;
