import React from "react";

const HomeServiceCard = ({ service, onClick }) => {
  return (
    <div
      className="w-full h-full flex flex-col  justify-between items-center  relative bg-gray-300 rounded-lg p-3 cursor-pointer"
      onClick={onClick}
    >
      {service?.categoryImage && (
        <img
          src={service.categoryImage}
          alt="promotion-img"
          className="w-full h-[80%] object-cover mb-2"
        />
      )}
      <h1 className="w-full text-black text-[16px] font-medium ">
        {service?.categoryName}
      </h1>
    </div>
  );
};

export default HomeServiceCard;