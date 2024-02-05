import React from "react";

const RewardCard = ({ reward, onClick }) => {
  return (
    <div
      className="w-full rounded-[20px] h-full border-[1px] flex flex-col items-center 
      justify-between p-[10px] border-[#F0F1F3"
      onClick={onClick}
    >
      {reward?.image && (
        <div className="w-full h-[65%] p-2 rounded-lg bg-[#EBF2FF] flex items-center justify-center">
          <img
            src={reward.image}
            alt="reward-img"
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="overflow-hidden text-[#48505E] text-[12px]  font-medium text-ellipsis whitespace-nowrap ">
          {reward?.name}
        </h1>
        <p className="text-[#858D9D] text-[12px] overflow-hidden text-ellipsis whitespace-nowrap ">
          {reward?.pointRequired} points
        </p>
      </div>
    </div>
  );
};

export default RewardCard;
