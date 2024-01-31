import React from "react";

import PointIcon from "../../assets/icons/point_icon.svg";

import "./PointTotal.scss";

const PointTotal = ({ point_data }) => {
  return (
    <div className="point-total w-full h-full flex flex-col rounded-lg p-5 ">
      <h3 className="text-[#FFF] text-[12px] font-semibold">
        Total Loyalty Points
      </h3>
      <div className="flex items-center gap-2">
        <img src={PointIcon} alt="point-icon" className="w-5 h-5"/>
        <p className="text-[#FFF] text-[20px] font-bold">{point_data?.point}</p>
      </div>
    </div>
  );
};

export default PointTotal;
