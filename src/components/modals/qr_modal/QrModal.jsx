import React from "react";
import DefaultImage from "../../../assets/images/qr-default.svg";

import "./QrModal.scss";

const QrModal = ({ setIsClick, image }) => {
  return (
    <div
      className="qr-modal flex w-full h-full justify-center z-20 items-center absolute  left-0 top-0"
      onClick={() => setIsClick(false)}
    >
      <div className="qr-container w-full flex flex-col justify-center items-center p-4 bg-white z-30 shadow-lg rounded-lg">
        <div className="w-[250px] h-[250px]">
          {image ? (
            image 
          ) : (
            <img src={DefaultImage} alt="qr" className="w-full h-full" />
          )}
        </div>
        <p className="mb-5 mt-5 text-[#667085] text-[14px] leading-5">
          Show QR Code to Collect Reward
        </p>
        <div className="flex w-full gap-5 justify-between items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsClick(false);
            }}
            className="flex-1 p-4 text-[16px] bg-[#F0F1F3] text-[#48505E] font-bold 
            border-[1px] rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrModal;
