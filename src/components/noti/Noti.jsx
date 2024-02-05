import React from "react";

import PointIcon from "../../assets/icons/point_icon.svg";

const Noti = ({ noti, onClick }) => {
  return (
    <div
      className="flex w-full gap-3 p-2 border-b-[1px] hover:bg-gray-50 cursor-pointer border-gray-100"
      onClick={onClick}
    >
      <img src={PointIcon} alt="point-icon" className="w-5 h-5 mt-[3px]" />
      <div className="flex flex-col items-start">
        <h4 className="text-[16px] font-bold">{noti?.title}</h4>
        <p className="text-[14px] text-gray-500">{noti?.description}</p>
      </div>
    </div>
  );
};

export default Noti;
