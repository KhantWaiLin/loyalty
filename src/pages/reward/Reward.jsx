import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../../components/loader/Loader";
import RewardCard from "../../components/RewardCard";
import PointTotal from "../../components/point_total/PointTotal";

import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";

import Heart from "../../assets/icons/heart-icon.svg";

import "./Reward.scss";

const Reward = () => {
  const [pointData, setPointData] = useState(null);
  const [rewardData, setRewardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onClick = (item) => {
    navigate(`/reward/${item?.id}`);
  };

  const { get_member_info, reward_list } = api_routes;

  const get_reward_list = async () => {
    setIsLoading(true);
    const { brand_id, user_id } = getUserBrandMemberId();
    await api
      .get(get_member_info, { brandId: brand_id, userId: user_id })
      .then((response) => {
        setPointData(response?.data?.value?.data);
      });
    await api
      .postByBody(reward_list, { brandId: brand_id })
      .then((response) => {
        setRewardData(response?.data?.value?.data?.data);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    get_reward_list();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <div className="reward-wrapper items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <section className="reward-wrapper p-4 w-full overflow-hidden">
      <div className="flex w-full justify-between items-center mb-6">
        <h1 className="flex w-auto flex-1 text-[#48505E] justify-center items-center text-[16px] font-medium">
          Rewards
        </h1>
        <button
          className="flex w-[50px] h-[50px] items-center justify-center border-[1px]
         border-[#F0F1F3] rounded-lg bg-[#FAFAFA]"
        >
          <img src={Heart} alt="heart-icon" className="w-5 h-5" />
        </button>
      </div>
      <div className="total-point mb-6">
        <PointTotal point_data={pointData} />
      </div>
      <div
        className="scroll-container overflow-scroll no-scrollbar w-full 
        flex gap-[20px] flex-col flex-wrap justify-start"
      >
        {rewardData?.map((reward) => (
          <div key={reward.id} className="w-[186px] h-[180px] cursor-pointer">
            <RewardCard
              reward={reward}
              onClick={() => {
                onClick(reward);
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reward;
