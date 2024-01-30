import React from "react";
import { useNavigate } from "react-router-dom";

function PromotionItem({ promotion }) {
  let navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/promotion-detail/${id}`);
  };

  return (
    <li
      onClick={() => handleDetail(promotion.id)}
      className="cursor-pointer h-[260px] mb-1 p-[10px] w-full bg-white"
    >
      <img
        src={promotion.image}
        alt={promotion.name}
        className="h-[180px] w-full rounded-md mb-[8px]"
      />
      <p lassName="text-base font-normal not-italic text-[#48505E]">
        {promotion.name}
      </p>
      <p className="text-sm font-normal mt-[8px] not-italic text-[#989FAD]">
        {promotion.startDate}
      </p>
    </li>
  );
}

export default PromotionItem;
