import React from "react";

import CuponIcon from "../../assets/icons/cupon_icon.svg";

const Coupon = () => {
  return (
    <div className="cursor-pointer w-full h-full rounded-lg border-[#F0F1F3] border-[1px] gap-[10px] flex flex-col bg-[#FAFAFA] items-center justify-center">
      <img src={CuponIcon} alt="cupon-icon" />
      <p className="text-[12px] text-[#384BCA] font-medium ">Coupon</p>
    </div>
  );
};

export default Coupon;
