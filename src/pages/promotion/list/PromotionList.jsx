import React from "react";
import PromotionItem from "./components/PromotionItem";
import { useState, useEffect } from "react";

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
  height: '550px',
  overflow: 'auto',
  ovarflowY: 'scroll',
  scrollbarWidth: 'thin',
};


function PromotionList({ promotionList }) {
  const baseURL =
    "https://loyaltybim.azurewebsites.net/api/Customer/GetPromotionListByBrandId";

  const authURL =
    "https://loyaltybim.azurewebsites.net/api/Authentication/Authenticate";

  const [token, setToken] = useState("");
  const [promotionData, setPromotionData] = useState("");

  useEffect(() => {
    fetch(authURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(auth),
    })
      .then((response) => response.json())
      .then((result) => setToken(result.data.token));

    if (token) {
      fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => setPromotionData(result.value));
    }
  }, [token]);

  const auth = {
    userName: "09422924858",
    password: "jujuJu1",
    userType: 2,
  };

  const data = {
    keyword: "",
    rowLimit: 10,
    currentPage: 1,
    sortBy: "",
    isDesc: true,
    brandId: "265f0dff-a30a-11ed-b26e-6045bdd63acb",
    filterDate: null,
  };

  let promotionListData = "";

  if (promotionData) {
    promotionListData = promotionData.data.data;
  } else {
    return null;
  }

  return (
    <div className="text-black-500 text-lg">
      <a style={icon_style} href="#">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </a>
      <h1 style={heading}>Promotions</h1>
      <div style={cardListStyle}>
      {promotionListData &&
            promotionListData.map((promotion, index) => (
              <PromotionItem promotion={promotion} key={index} />
            ))}
      </div>
    </div>
  );
}

export default PromotionList;
