import React from "react";

const PromotionCard = ({ promotion, onClick }) => {
  return (
    <div
      className="w-full h-full flex flex-col  justify-between items-center  relative bg-gray-300 rounded-lg p-3 cursor-pointer"
      onClick={onClick}
    >
      {promotion?.image && (
        <img
          src={promotion.image}
          alt="promotion-img"
          className="w-[60%] h-[60%] object-contain mb-2"
        />
      )}
      <h1 className="w-full text-black text-[16px] font-medium ">
        {promotion?.name}
      </h1>
      <p className="w-full text-black text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
        {promotion?.description}
      </p>
    </div>
  );
};

export default PromotionCard;
