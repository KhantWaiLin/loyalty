import React, { useEffect, useState } from "react";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";
import api from "../../../api/api";
import { format } from "date-fns";
import PointList from "./components/PointList";
import { Link } from "react-router-dom";

import Loader from "../../../components/loader/Loader";

import "./TransactionHistory.scss";

const TransactionHistory = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { transaction_history } = api_routes;
  const { brand_id, user_id, member_id } = getUserBrandMemberId();

  useEffect(() => {
    get_transaction();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center transaction-history-wrapper">
        <Loader />
      </div>
    );
  }

  const get_transaction = async () => {
    setIsLoading(true);
    await api
      .postByBody(transaction_history, {
        brandId: brand_id,
        memberid: user_id,
      })
      .then((response) => {
        setData(response?.data?.data?.pointHistories);
      });
    setIsLoading(false);
  };

  return (
    <div className="relative flex flex-col w-full overflow-scroll transaction-history-wrapper no-scrollbar">
      <header className="flex flex-col z-30 bg-indigo-700 basis-2/12 ps-[20px] pr-[42%]">
        <section className="flex justify-between mt-[20px]">
          <Link
            to="/profile"
            className="flex flex-col items-start justify-start w-6 h-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </Link>
          <h1 className="text-white">Point History</h1>
        </section>
      </header>

      {/* point history list */}
      <main className=" z-50 bg-white absolute left-0 rounded-t-2xl top-16 w-full h-[485px] basis-10/12 overflow-auto no-scrollbar pt-3">
        {data &&
          data.map((point, index) => {
            return (
              <PointList
                key={index}
                point={point.point}
                collectedType={point.collectedType}
                isIn={point.isIn}
                date={format(point.date, "MMMM dd, yyyy")}
              />
            );
          })}

        <div className="text-gray-400 text-[13px] font-normal  leading-tight mb-1 text-center">
          No More Result!
        </div>
      </main>
      {/* point history list */}
    </div>
  );
};

export default TransactionHistory;
