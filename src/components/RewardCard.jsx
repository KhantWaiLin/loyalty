import React from "react";

const RewardCard = ({ reward, onClick }) => {
  return (
    <div
      className="w-full rounded-lg h-full flex flex-col items-center justify-between p-4 bg-gray-300 overflow-hidden text-ellipsis whitespace-nowrap"
      onClick={onClick}
    >
      {reward?.image && (
        <div className="w-full flex items-center justify-center">
          <img
            src={reward.image}
            alt="reward-img"
            className="w-[80%] h-[100px] object-contain mb-2"
          />
        </div>
      )}
      <div className="w-full justify-start ">
        <h1 className="overflow-hidden text-ellipsis whitespace-nowrap ">
          {reward?.name}
        </h1>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap ">
          {reward?.description}
        </p>
      </div>
    </div>
  );
};

export default RewardCard;
