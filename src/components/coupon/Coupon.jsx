import React, { useEffect, useContext } from "react";

import CuponIcon from "../../assets/icons/cupon_icon.svg";
import { LanguageContext } from "../../LanguageContext";

const Coupon = () => {
  const { t, changeLanguage } = useContext(LanguageContext);

  useEffect(() => {
    changeLanguage(localStorage.getItem("language"));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="cursor-pointer w-full h-full rounded-lg border-[#F0F1F3] border-[1px] gap-[10px] flex flex-col bg-[#FAFAFA] items-center justify-center">
      <img src={CuponIcon} alt="cupon-icon" />
      <p className="text-[12px] text-[#384BCA] font-medium ">{t('coupon')}</p>
    </div>
  );
};

export default Coupon;
