import React from "react";
import DefaultImage from "../../../assets/images/profile_img.svg";
import Cloud from "../../../assets/images/cloud.svg";

const UserInfo = ({ user }) => {
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
          <p className="text-[#667085] text-[14px]">Good Morning</p>
          <img src={Cloud} className="w-[18px] h-[18px]" />
        </div>
        <h4 className="text-[#48505E] text-[20px] font-medium">
          {user?.name}
        </h4>
      </div>
    </div>
  );
};

export default UserInfo;
