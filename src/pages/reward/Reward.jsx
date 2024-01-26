import React from "react";
import { reward_data } from "../../data";
import RewardCard from "../../components/RewardCard";

import "./Reward.scss";

const Reward = () => {
  return (
    <div className="reward-wrapper p-4 w-full overflow-scroll">
      <h1 className="flex justify-center mb-5 items-center text-[30px]">Reward</h1>
      <div className="flex gap-[25px] flex-wrap">
        {reward_data?.map((reward) => (
          <div key={reward.name} className="w-[185px] h-[150px]">
            <RewardCard name={reward.name} desc={reward.desc} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reward;
