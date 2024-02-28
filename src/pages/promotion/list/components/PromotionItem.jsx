import React from "react";
import { useNavigate } from "react-router-dom";

const cardStyle = {
  width: '360px',
  height: '220px',
  border: '1px solid #F0F1F3',
  borderRadius: '20px',
  paddingLeft: '2px'
};

const imageSectionStyle = {
  width: '368px',
  height: '140px',
  borderRadius: '8px',
  overflow: 'hidden',
  objectFit: 'cover',
};

function PromotionItem({ promotion }) {
  let navigate = useNavigate();

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  return (
    <a href={`/promotiondetail/${promotion.id}`} style={cardStyle}>
      <div style={imageSectionStyle}>
        <img
          className="w-full h-full object-contain"
          src={promotion.image}
          alt="Card Image"
        />
      </div>
      <p className="text-base font-normal not-italic text-[#48505E]">
        {promotion.name}
      </p>
      <p className="text-sm font-normal mt-[8px] not-italic text-[#989FAD]">
        {formatDate(promotion.startDate)}
      </p>
    </a>
  );
}

export default PromotionItem;
