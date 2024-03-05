import React, { useEffect, useState, useContext } from "react";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";
import api from "../../../api/api";
import { format } from "date-fns";
import PointList from "./components/PointList";
import { Link } from "react-router-dom";

import Loader from "../../../components/loader/Loader";
import { LanguageContext } from "../../../LanguageContext";

import "./TransactionHistory.scss";

const TransactionHistory = () => {
  const { t, changeLanguage } = useContext(LanguageContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { transaction_history } = api_routes;
  const { brand_id, user_id, member_id } = getUserBrandMemberId();

  useEffect(() => {
    get_transaction();
    changeLanguage(localStorage.getItem("language"));
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
    <div className="transaction-history-wrapper overflow-hidden ">
      <section className="mt-[52px] mx-[20px] h-full overflow-hidden ">
        {/* back btn & header */}
        <article className="h-[50px]  flex items-center">
          <Link
            to="/profile"
            className="w-[50px] h-[50px] p-[13px] bg-neutral-50 rounded-lg border border-gray-100 justify-center items-center inline-flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-black "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </Link>

          <h1 className="ms-[66px] text-gray-600 text-base font-medium leading-[18px] font-['Poppins' text-center">
            {t('transaction')}
          </h1>
        </article>
        {/* back btn & header */}

        {/*  */}
        <article className="h-5/6 mt-[20px] overflow-auto no-scrollbar">
          {data === null ? (
            <div className="h-full overflow-hidden flex flex-col justify-center items-center">
              <img
                src="/img/no_data.svg"
                alt="No Data"
                className="w-[108.77px] h-[106.17px]"
              />
              <p className="inline text-gray-500 text-sm font-normal font-['Poppins'] leading-normal pt-[20px]">
                No History Available
              </p>
            </div>
          ) : (
            data.map((point, index) => {
              return (
                <PointList
                  key={index}
                  point={point?.point}
                  collectedType={point?.collectedType}
                  isIn={point?.isIn}
                  date={format(point?.date, "MMMM dd, yyyy")}
                />
              );
            })
          )}
        </article>
        {/*  */}
      </section>
    </div>
  );
};

export default TransactionHistory;
