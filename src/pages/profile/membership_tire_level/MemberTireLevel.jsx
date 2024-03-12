import React, { useEffect, useState, useContext } from "react";
import PointTotal from './PointTotal';

import Loader from "../../../components/loader/Loader";

import api from "../../../api/api";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";

import { Link } from "react-router-dom";

import { LanguageContext } from "../../../LanguageContext";

import "./MemberTireLevel.scss";

const icon_style = {
  position: 'absolute',
  left: '15px',
  top: '33px',
  backgroundColor: '#FAFAFA',
  padding: '10px',
  border: '1px',
  borderRadius: '5px',
}

const heading = {
  position: 'relative',
  left: '180px',
  top: '35px'
}

const sectionStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '5px 15px',
  fontSize: '14px',
  width: '90%'
};

const buttonStyle = {
  border: '1px solid rgba(128, 128, 128, 0.5)',
  padding: '15px',
  borderRadius: '5px'
}

const MemberTireLevel = () => {
  const { t, changeLanguage } = useContext(LanguageContext);
  const [data, setData] = useState(null);
  const [level, setLevel] = useState(null);
  const [img, setImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pointData, setPointData] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const { membership_level, member_tire_level, get_member_info } = api_routes;
  const { brand_id, user_id } = getUserBrandMemberId();

  const get_tire_list = async () => {
    setIsLoading(true);
    try {
      const response1 = await api.get(membership_level, { brandId: brand_id, userId: user_id });
      setData(response1?.data?.value?.data);

      const response2 = await api.get(member_tire_level, { brandId: brand_id });
      setLevel(response2?.data?.value?.data);

      const response3 = await api.get(get_member_info, { brandId: brand_id, userId: user_id });
        setPointData(response3?.data?.value?.data);
        setUserInfo(response3?.data?.value?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    get_tire_list();
    changeLanguage(localStorage.getItem("language"));
  }, []);

  useEffect(() => {
    switch (data?.memberType) {
      case "silver":
        setImg(level ? level[0]?.image : null);
        break;
      case "gold":
        setImg(level ? level[1]?.image : null);
        break;
      case "platinum":
        setImg(level ? level[2]?.image : null);
        break;
      case "diamond":
        setImg(level ? level[3]?.image : null);
        break;
      default:
        break;
    }
  }, [data, level]);

  if (isLoading) {
    return (
      <div className="member-tire-wrapper items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }
  

  return (
    <div className="member-tire-wrapper relative flex flex-col w-full overflow-scrol no-scrollbar">
      <a style={icon_style} href="/profile">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </a>
      <h1 style={heading}>{t('membership1')}</h1>
      <div style={{ marginTop: '65px'}}>
        <PointTotal point_data={pointData} user_info={userInfo}/>
      </div>
      <div style={sectionStyle}>
        <div class="flex justify-start items-center">
          {t('tier')} 
          <img src={img} alt="level-img" className="w-[23px] h-[23px]"/>
        </div>
        <a style={{color:'blue', textDecoration: 'underline'}} href="/profile/membership-tire-level/view-tier-benefits">{t('viewTier')}</a>
      </div>
      <p style={{marginLeft: '15px'}} className="text-xs font-normal basis-1/12">
        {data?.alert}
      </p>
      <div >
        <a href="/profile/expire-point" style={{...sectionStyle,...buttonStyle}}>
          {t('expirePoints')}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </a>
      </div>
      <div>
        <a href="/profile/transaction-history"  style={{...sectionStyle,...buttonStyle}}>
          {t('pointHistory')}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MemberTireLevel;
