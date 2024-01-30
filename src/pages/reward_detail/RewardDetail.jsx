import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import PopUp from "../../components/popup/PopUp";

import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";

import "./RewardDetail.scss";

const RewardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { reward_list } = api_routes;

  const get_detail = async (id) => {
    setIsLoading(true);
    const { brand_id } = getUserBrandMemberId();
    await api
      .postByBody(reward_list, { brandId: brand_id })
      .then((response) => {
        setData(
          response?.data?.value?.data?.data?.find((item) => item.id === id)
        );
      });
    setIsLoading(false);
  };

  useEffect(() => {
    get_detail(id);
    // eslint-disable-next-line
  }, [id]);

  const onClick = (is_ok) => {
    console.log(is_ok);
    setShowPopup(false);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="reward-detail p-4 w-full overflow-scroll">
      {showPopup && (
        <PopUp
          title="Confirmation"
          desc="Are you sure to redeem?"
          onClick={onClick}
        />
      )}
      <div className="flex w-full items-center gap-12 mb-10">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-400 rounded-full text-white"
        >
          Back
        </button>
        <h1 className="flex-1 flex items-center text-[28px]">Reward Detail</h1>
      </div>
      <div className="flex flex-col gap-5 mb-4">
        <div className="w-full  bg-gray-300 h-[211px]">
          <img
            src={data?.image}
            alt="detail-img"
            className=" w-full h-full object-contain"
          />
        </div>
        <div className="flex justify-between">
          <button className="bg-gray-300 p-3 rounded-md">Button 1</button>
          <button className="bg-gray-300 p-3 rounded-md">Button 2</button>
          <button className="bg-gray-300 p-3 rounded-md">Button 3</button>
          <button className="bg-gray-300 p-3 rounded-md">Button 4</button>
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <h1 className="text-[18px] font-medium">{data?.name}</h1>
        <h1 className="text-[18px] font-medium">
          price: {data?.pointRequired}
        </h1>
      </div>
      <div className="w-full flex flex-wrap mb-8">
        <p className="flex text-justify">{data?.description}</p>
      </div>
      <div className="flex w-full justify-center items-center">
        <button
          type="button"
          onClick={() => setShowPopup(true)}
          className="flex p-4 text-[23px] bg-blue-400 rounded-lg text-white"
        >
          Redeem
        </button>
      </div>
    </div>
  );
};

export default RewardDetail;
