import React from "react";

const RewardCard = ({ name, desc, onClick }) => {
  return (
    <div
      className="w-full rounded-lg h-full p-4 overflow-scroll bg-gray-300"
      onClick={onClick}
    >
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default RewardCard;
