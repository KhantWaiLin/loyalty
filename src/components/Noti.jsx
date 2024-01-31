import React from "react";
import NotiIcon from "../assets/icons/noti_icon.svg";

const Noti = () => {
  return (
    <div className="w-full cursor-pointer relative h-full justify-center flex items-center rounded-lg bg-[#FAFAFA]">
      <img src={NotiIcon} alt="noti-icon" className="w-5 h-5" />
      <div className="w-[10px] h-[10px] rounded-full bg-[#F00] absolute top-3 right-3 " />
    </div>
  );
};

export default Noti;
