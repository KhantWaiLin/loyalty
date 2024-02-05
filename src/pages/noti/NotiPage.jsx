import React, { useEffect, useState } from "react";

import { noti_data } from "../../data";
import NotiItem from "../../components/noti/NotiItem";
import { api_routes } from "../../utils/apiRoute";
import api from "../../api/api";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";

import "./NotiPage.scss";
import Loader from "../../components/loader/Loader";

const NotiPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notiData, setNotiData] = useState(null);
  const { noti_list } = api_routes;

  const get_data = async () => {
    setIsLoading(true);
    const { brand_id, member_id } = getUserBrandMemberId();
    await api
      .postByBody(noti_list, { brandId: brand_id, memberId: member_id })
      .then((response) => {
        setNotiData(response?.data?.data?.data);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    get_data();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <div className="noti-page items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <section className="noti-page p-4 w-full overflow-hidden">
      <div className="flex header left-0 top-0 w-full items-center absolute px-2 py-7 justify-between">
        <h1 className="flex w-auto flex-1 text-[#FFF] justify-center items-center text-[16px] font-bold">
          Notifications
        </h1>
      </div>
      <div className="w-full scroll-container relative top-20 flex flex-col">
        {notiData?.lenth > 0 ? (
          notiData?.map((noti) => <NotiItem key={noti?.id} noti={noti} />)
        ) : (
          <p className="relative top-[40%] w-full text-center text-gray-500">
            No Results Found
          </p>
        )}
      </div>
    </section>
  );
};

export default NotiPage;
