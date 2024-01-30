import React from "react";
import { Link } from "react-router-dom";

function PromotionItem({ promotion }) {
  return (
    <li className="flex items-center justify-between px-3 py-2 mb-3 border-2 border-black rounded-md">
      <span>{promotion.name}</span>
      <span>
        <Link to={`/promotion-detail/${promotion.id}`} className="px-2 border-2 rounded-full">Detail</Link>
      </span>
    </li>
  );
}

export default PromotionItem;
