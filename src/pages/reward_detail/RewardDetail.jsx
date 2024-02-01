import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import PopUp from "../../components/popup/PopUp";
import Loader from "../../components/loader/Loader";

import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";

import Heart from "../../assets/icons/heart-icon.svg";
import BackArrow from "../../assets/icons/back_arrow.svg";

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
    return (
      <div className="reward-detail items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="reward-detail relative p-4 w-full h-full overflow-scroll no-scrollbar">
      {showPopup && (
        <PopUp
          title="Confirmation"
          desc="Are you sure to redeem?"
          onClick={onClick}
        />
      )}
      <div className="reward-detail-wrapper w-full relative p-4 overflow-scroll no-scrollbar">
        <div className="flex w-full items-center justify-between mb-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-[50px] h-[50px] flex items-center justify-center border-[1px] border-[#F0F1F3] rounded-lg bg-[#FAFAFA]  text-white"
          >
            <img src={BackArrow} alt="back-icon" className="w-6 h-6" />
          </button>

          <h1 className="flex w-auto flex-1 text-[#48505E] justify-center items-center text-[16px] font-medium">
            Reward Details
          </h1>
          <button
            className="flex w-[50px] h-[50px] items-center justify-center border-[1px]
         border-[#F0F1F3] rounded-lg bg-[#FAFAFA]"
          >
            <img src={Heart} alt="heart-icon" className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex justify-center items-center bg-[#EBF2FF] rounded-lg h-[200px]">
            <img
              src={data?.image}
              alt="detail-img"
              className=" w-[85%] h-[85%] object-contain"
            />
          </div>
          <div className="flex gap-2 justify-between">
            {Array.from({ length: 5 }, (_, index) => (
              <div
                key={index}
                className="flex justify-center items-center rounded-lg bg-[#EBF2FF]"
              >
                <img
                  src={data?.image}
                  alt="detail-img"
                  className=" w-[85%] items-center h-[85%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-[#48505E] font-medium">
            {data?.name}
          </h1>
        </div>
        <div className="w-full flex flex-wrap mb-8">
          <p className="flex text-[16px] text-justify font-normal text-[#48505E]">
            {data?.description}
          </p>
        </div>
      </div>
      <div className="redeem-btn-wrapper w-full shadow-md flex justify-between z-10 absolute left-0 py-2 px-4 pb-[34px] bottom-0">
        <button
          type="button"
          onClick={() => setShowPopup(true)}
          className="flex w-full p-4 font-bold justify-center bg-[#384BCA] text-[16px] rounded-lg text-[#FFF]"
        >
          Redeem
        </button>
      </div>
    </div>
  );
};

export default RewardDetail;
