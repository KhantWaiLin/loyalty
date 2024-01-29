import React from "react";

const RewardCard = ({ name, desc, onClick }) => {
  return (
    <div
      className="w-full rounded-lg h-full flex flex-col justify-between p-4 bg-gray-300 overflow-hidden text-ellipsis whitespace-nowrap"
      onClick={onClick}
    >
      <div>
        <h1>{name}</h1>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap ">
          {desc}
        </p>
      </div>
      <div className="flex justify-between">
        <button className="bg-[#FFF] px-3 py-1 border-black border-[1px] rounded-lg">
          Point
        </button>
        <button className="bg-blue-400 px-3 py-1 rounded-lg text-white">
          Cupon
        </button>
      </div>
    </div>
  );
};

export default RewardCard;
