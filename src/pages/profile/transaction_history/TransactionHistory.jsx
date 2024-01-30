import React, { useEffect } from "react";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";
import api from "../../../api/api";

import "./TransactionHistory.scss";

const TransactionHistory = () => {
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
      });
  };

  useEffect(() => {
    get_transaction();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="transaction-history-wrapper flex flex-col py-4 px-6 w-full overflow-scroll">
      <h1 className="text-[24px] w-full flex justify-center font-medium mb-4">
        Transaction History
      </h1>
    </div>
  );
};

export default TransactionHistory;
