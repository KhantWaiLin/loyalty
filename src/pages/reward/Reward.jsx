import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../../components/loader/Loader";
import RewardCard from "../../components/RewardCard";

import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";

import "./Reward.scss";

const Reward = () => {
  const [rewardData, setRewardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onClick = (item) => {
    navigate(`/reward/${item?.id}`);
  };

  const { reward_list } = api_routes;

  const get_reward_list = async () => {
    setIsLoading(true);
    const { brand_id } = getUserBrandMemberId();
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
    <div className="reward-wrapper p-4 w-full overflow-scroll">
      <h1 className="flex justify-center mb-5 items-center text-[30px]">
        Reward
      </h1>
      <div className="flex gap-[25px] flex-wrap">
        {rewardData?.map((reward) => (
          <div key={reward.id} className="w-[185px] h-[200px] cursor-pointer">
            <RewardCard
              reward={reward}
              onClick={() => {
                onClick(reward);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reward;
