import React from "react";
import { reward_data } from "../../data";
import RewardCard from "../../components/RewardCard";

import "./Reward.scss";
import { useNavigate } from "react-router-dom";

const Reward = () => {
  const navigate = useNavigate();
  const onClick = (item) => {
    navigate(`/reward/${item?.id}`);
  };
  return (
    <div className="reward-wrapper p-4 w-full overflow-scroll">
      <h1 className="flex justify-center mb-5 items-center text-[30px]">
        Reward
      </h1>
      <div className="flex gap-[25px] flex-wrap">
        {reward_data?.map((reward) => (
          <div key={reward.name} className="w-[185px] h-[150px] cursor-pointer">
            <RewardCard
              name={reward.name}
              desc={reward.desc}
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
