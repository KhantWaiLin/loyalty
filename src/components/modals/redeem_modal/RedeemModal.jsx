import React, {useContext} from "react";
import "./RedeemModal.scss";

import { LanguageContext } from "../../../LanguageContext";

const RedeemModal = ({ title, desc, onClick, image }) => {
  const { t, changeLanguage } = useContext(LanguageContext);

  return (
    <div
      className="redeem-modal flex w-full h-full justify-center z-20 items-center absolute  left-0 top-0"
      onClick={() => onClick(false)}
    >
      <div className="redeem-container w-full p-4 bg-white z-30 shadow-md rounded-lg">
        <div className="w-full reward-icon-wrapper mb-4">
          <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-[#F5F6FD]">
            <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#F0F1F3]">
              {image}
            </div>
          </div>
        </div>
        <h1 className="text-[16px] font-medium leading-7 mb-2">{title}</h1>
        <p className="mb-5 text-[#667085] text-[14px] leading-5">{desc}</p>
        <div className="flex w-full gap-5 justify-between items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick(false);
            }}
            className="flex-1 p-4 text-[16px] bg-[#F0F1F3] text-[#48505E] font-bold 
            border-[1px] rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick(true);
            }}
            className="confirm-btn flex-1 p-4 font-bold text-[16px] text-[#FFF] rounded-lg"
          >
            {t('verification1')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedeemModal;
