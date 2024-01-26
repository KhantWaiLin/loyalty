import React from "react";

const PromotionCard = ({ name, desc }) => {
  return (
    <div className="w-full h-full bg-gray-300 rounded-lg p-3">
      <h1 className="text-black text-[16px]">{name}</h1>
      <p className="text-black text-[14px]">{desc}</p>
    </div>
  );
};

export default PromotionCard;
