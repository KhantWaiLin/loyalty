import React from "react";
import Footer from "../../../layouts/Footer";
import PromotionItem from "./components/PromotionItem";
import { useState, useEffect } from "react";

function PromotionList({promotionList}) {
  const baseURL = "https://loyaltybim.azurewebsites.net/api/Customer/GetPromotionListByBrandId";

  const authURL = "https://loyaltybim.azurewebsites.net/api/Authentication/Authenticate";

  const [token, setToken] = useState("");
  const [promotionData, setPromotionData] = useState('');

  useEffect(() => {
    fetch(authURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(auth)
    }).then(response => response.json()).then(result => setToken(result.data.token));
    
    if (token) {
      fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      }).then(response => response.json()).then(result => setPromotionData(result.value));
    }

  }, [token]);

  const auth = {
    "userName": "09422924858",
    "password": "jujuJu1",
    "userType": 2
  };

  const data = {
    "keyword": "",
    "rowLimit": 10,
    "currentPage": 1,
    "sortBy": "",
    "isDesc": true,
    "brandId": "265f0dff-a30a-11ed-b26e-6045bdd63acb",
    "filterDate": null
  };

  let promotionListData = "";

  if (promotionData) {
    promotionListData = promotionData.data.data;
  } else {
    return null;
  }
  
  return (
    <main className="flex flex-col h-full border-2">
      <section className="flex items-center justify-center basis-1/12">
        <h1>Promotion List</h1>
      </section>
      <section className="px-2 basis-1/12">
        <ul className="flex items-center justify-between w-1/2 h-full">
          <li className="cursor-pointer">Available</li>
          <li className="cursor-pointer">Used</li>
          <li className="cursor-pointer">Expired</li>
        </ul>
      </section>
      <section className="px-2 basis-9/12">
        <ul className="mt-1">
          {
            promotionListData && promotionListData.map((promotion, index) => <PromotionItem promotion={promotion} key={index}/>)
          }
        </ul>
      </section>
      <section className="basis-1/12">
        <Footer />
      </section>
    </main>
  );
}

export default PromotionList;