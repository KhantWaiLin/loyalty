import React, {useEffect, useState, useContext} from "react";
import DefaultImage from "../../../assets/images/profile_img.svg";
import Cloud from "../../../assets/images/cloud.svg";
import { LanguageContext } from "../../../LanguageContext";

const UserInfo = ({ user }) => {
  const { t, changeLanguage } = useContext(LanguageContext);
  const [greeting, setGreeting] = useState(null);

  useEffect(() => {
    changeLanguage(localStorage.getItem("language"));
    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour < 12) {
      setGreeting(t('goodM'));
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting(t('goodA'));
    } else {
      setGreeting(t('goodE'));
    }
  }, []);
return (
  <div className="flex w-full h-full gap-3">
    <div className="w-[50px] h-[50px]">
      <img
        src={user?.image ? user?.image : DefaultImage}
        alt="profile-img"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="flex-col">
      <div className="flex items-center gap-1">
        <p className="text-[#667085] text-[14px]">{greeting}</p>
        {/* <img src={Cloud} className="w-[18px] h-[18px]" /> */}
      </div>
      <h4 className="text-[#48505E] text-[20px] font-medium">
        {user?.name}
      </h4>
    </div>
  </div>
);
};

export default UserInfo;
