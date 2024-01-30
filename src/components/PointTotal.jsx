import React from "react";

const PointTotal = ({ point_data }) => {
  console.log(point_data);
  return (
    <div className="w-full h-full flex border-black border-[1px] rounded-lg p-2">
      <div>
        <p>Name: {point_data?.name}</p>
        <p>Phone: {point_data?.phoneNo}</p>
        <p>Total points:{point_data?.point}</p>
      </div>
    </div>
  );
};

export default PointTotal;
