import React from "react";
import Footer from "../../../layouts/Footer";
import PromotionItem from "./components/PromotionItem";
import { useState, useEffect } from "react";

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
    <main className="relative flex flex-col h-full">
      {/* header */}
      <header className="flex bg-blue-800 basis-2/12">
        <article className="mt-7">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </article>
        <h1 className="text-center text-white mt-7 ms-36">Promotion</h1>
        {/* <article className="absolute z-20 w-32 h-32 overflow-hidden bg-blue-200 rounded-full -right-4 -top-4"></article> */}
      </header>
      {/* header */}

      {/* body */}
      <section className="bg-white z-30 rounded-t-2xl absolute top-[90px] left-0 w-full h-[520px] basis-10/12 pt-[24px] px-[20px]">
        <ul className="max-h-[445px] overflow-auto">
          {promotionListData &&
            promotionListData.map((promotion, index) => (
              <PromotionItem promotion={promotion} key={index} />
            ))}
        </ul>
      </section>
      {/* body */}

      {/* footer */}
      <footer className="absolute bottom-0 left-0 z-50 w-full basis-1/12">
        <Footer />
      </footer>
      {/* footer */}
    </main>
  );
}

export default PromotionList;
