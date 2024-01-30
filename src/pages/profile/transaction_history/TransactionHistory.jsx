import React, { useEffect, useState } from "react";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";
import api from "../../../api/api";

import "./TransactionHistory.scss";

const TransactionHistory = () => {
  const [data, setData] = useState(null);
  const { transaction_history } = api_routes;
  const { brand_id, member_id } = getUserBrandMemberId();

  const get_transaction = async () => {
    api
      .postByBody(transaction_history, {
        branchId: brand_id,
        memberId: member_id,
      })
      .then((response) => {
        console.log(response.data);
        setData(response?.data?.value?.data);
      });
  };

  useEffect(() => {
    get_transaction();
    // eslint-disable-next-line
  }, []);
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
          {data?.map((history) => (
            <tr key={data?.date}>
              <td className="border border-gray-500 p-2">{data?.point}</td>
              <td className="border border-gray-500 p-2">
                {data?.collectedType}
              </td>
              <td className="border border-gray-500 p-2">
                {data?.isIn.toString()}
              </td>
              <td className="border border-gray-500 p-2">{data?.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
