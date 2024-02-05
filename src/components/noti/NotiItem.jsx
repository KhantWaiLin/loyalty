import React from "react";

import NotiIcon from "../../assets/icons/noti_icon.svg";

const NotiItem = ({ noti, onClick }) => {
  return (
    <div
      className="flex w-full gap-3 p-2 border-b-[1px] cursor-pointer border-gray-100"
      onClick={onClick}
    >
      <div className="flex w-fit h-fit justify-center items-center p-2 bg-gray-100 rounded-lg">
        <img src={NotiIcon} alt="noti-icon" className="w-5 h-5" />
      </div>
      <div className="flex w-full flex-col items-start">
        <div className="flex w-full justify-between items-center">
          <h4 className="text-[16px] font-bold">{noti?.title}</h4>
          <p className="text-[12px] text-gray-500">{noti?.date}</p>
        </div>
        <p className="text-[14px] text-gray-500">{noti?.description}</p>
      </div>
    </div>
  );
};

export default NotiItem;
