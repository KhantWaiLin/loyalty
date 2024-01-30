import React, { useEffect, useState } from "react";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";
import api from "../../../api/api";
import { format } from "date-fns";

import Loader from "../../../components/loader/Loader";

import "./TransactionHistory.scss";

const TransactionHistory = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { transaction_history } = api_routes;
  const { brand_id, user_id } = getUserBrandMemberId();

  console.log(data);
  const get_transaction = async () => {
    setIsLoading(true);
    await api
      .postByBody(transaction_history, {
        brandId: brand_id,
        memberid: user_id,
      })
      .then((response) => {
        console.log(response.data);
        setData(response?.data?.data?.pointHistories);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    get_transaction();
    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return (
      <div className="transaction-history-wrapper items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="transaction-history-wrapper flex flex-col py-4 px-6 w-full overflow-scroll">
      <h1 className="text-[24px] w-full flex justify-center font-medium mb-10">
        Transaction History
      </h1>
      <table className="w-full border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-500 p-2">Point</th>
            <th className="border border-gray-500 p-2">Collected Type</th>
            <th className="border border-gray-500 p-2">Is In</th>
            <th className="border border-gray-500 p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            const date = new Date(item?.date);
            const formattedDate = format(date, "yyyy-MM-dd HH:mm");

            return (
              <tr key={item?.date}>
                <td className="border border-gray-500 p-2">{item?.point}</td>
                <td className="border border-gray-500 p-2">
                  {item?.collectedType}
                </td>
                <td className="border border-gray-500 p-2">
                  {item?.isIn?.toString()}
                </td>
                <td className="border border-gray-500 p-2">{formattedDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
