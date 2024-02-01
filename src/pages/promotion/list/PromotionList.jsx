import React from "react";
import PromotionItem from "./components/PromotionItem";
import { useState, useEffect } from "react";

import Loader from "../../../components/loader/Loader";
import api from "../../../api/api";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";

const heading = {
  position: 'relative',
  left: '180px',
  top: '35px'
}

const icon_style = {
  position: 'absolute',
  left: '15px',
  top: '33px',
  backgroundColor: '#FAFAFA',
  padding: '10px',
  border: '1px',
  borderRadius: '5px',
}

const cardListStyle = {
  position: 'absolute',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  left: '17px',
  top: '80px',
  height: '80%',
  width: '90%',
  overflow: 'auto',
  ovarflowY: 'scroll',
  scrollbarWidth: 'thin',
};


function PromotionList() {
  const [promotionData, setPromotionData] = useState("");

  const { promotion_list } = api_routes;
  const [isLoading, setIsLoading] = useState(false);

  const promotionList = async () => {
    setIsLoading(true);
    const { brand_id } = getUserBrandMemberId();
    await api
      .postByBody(promotion_list, { brandId: brand_id })
      .then((response) => {
        setPromotionData(response.data.value.data.data);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    promotionList();
  }, []);

  if (isLoading) {
    return (
      <div className="reward-wrapper items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="text-black-500 text-lg">
      <a style={icon_style} href="/home">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </a>
      <h1 style={heading}>Promotions</h1>
      <div style={cardListStyle}>
        {promotionData &&
          promotionData.map((promotion, index) => (
            <PromotionItem promotion={promotion} key={index} />
          ))}
      </div>
    </div>
  );
}

export default PromotionList;
