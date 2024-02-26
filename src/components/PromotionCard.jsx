import React from "react";
import DefaultImage from "../assets/images/profile_img.svg"

const PromotionCard = ({ promotion, onClick }) => {
  return (
    <a
      className="w-full h-full flex flex-col  justify-between items-center  
                 relative bg-[#FFF] rounded-[20px] border-[1px] border-[#F0F1F3] p-[10px] cursor-pointer"
                 href={`/promotiondetail/${promotion.id}`}
    >
      <div className="w-full h-full bg-[#EBF2FF] rounded-lg">
        {promotion?.image && (
          <img
            // src={promotion.image}
            src={promotion?.image || DefaultImage}
            alt="promotion-img"
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </a>
  );
};

export default PromotionCard;
