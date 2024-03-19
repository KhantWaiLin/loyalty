import React, { useEffect, useState, useContext } from "react";

import Loader from "../../../../components/loader/Loader";

import api from "../../../../api/api";
import { api_routes } from "../../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../../utils/getBrandUserId";

import "./ViewTierBenefits.scss";
import { Link } from "react-router-dom";

import { LanguageContext } from "../../../../LanguageContext";

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
  marginTop: '10%',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '15px 15px',
  fontSize: '14px',
  width: '90%'
};

const ViewTierBenefits = () => {
  const { t, changeLanguage } = useContext(LanguageContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { member_tire_level } = api_routes;
  const { brand_id } = getUserBrandMemberId();

  const get_tire_list = async () => {
    setIsLoading(true);
    await api.get(member_tire_level, { brandId: brand_id }).then((response) => {
      setData(response?.data?.value?.data);
    });
    setIsLoading(false);
  };

  useEffect(() => {
    get_tire_list();
    changeLanguage(localStorage.getItem("language"));
  }, []);

  if (isLoading) {
    return (
      <div className="member-tire-wrapper items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="member-tire-wrapper relative flex flex-col w-full overflow-scrol no-scrollbar">
      <a style={icon_style} href="/profile/membership-tire-level">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </a>
      <h1 style={heading}>{t('viewTier1')}</h1>
      <div  style={{ marginTop: '65px', marginLeft: '15px' }}></div>
      <div class="relative overflow-x-auto mx-[12px] rounded-md">
          <table class="w-full text-sm text-center">
            <thead class="text-base bg-indigo-700 text-white ">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-2 border-r border-r-slate-100 font-normal text-base"
                >
                  Usage
                </th>
                <th scope="col" class="px-6 py-2 font-normal text-base">
                  Tier Level
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr key={index} class="odd:bg-gray-100">
                    <td class="px-6 py-2 text-sm font-medium border-r border-r-slate-100">
                      {item?.usage}
                    </td>
                    <td class="px-6 py-2 font-medium text-sm flex justify-start items-center">
                      <img
                        src={item?.image}
                        alt="level-img"
                        className="w-[23px] h-[23px]"
                      />
                      <p className="text-sm ps-2">{item?.name}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default ViewTierBenefits;
