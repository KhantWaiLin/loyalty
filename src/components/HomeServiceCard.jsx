import React from "react";

const HomeServiceCard = ({ service, onClick }) => {
  return (
    <div
      className="w-full h-full flex flex-col  justify-between items-center  
               relative bg-[#FFF] rounded-[20px] border-[1px] border-[#F0F1F3] p-[10px] cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-full relative bg-[#EBF2FF] rounded-lg">
        {service?.img && (
          <img
            src={service.img}
            alt="promotion-img"
            className="w-full h-full object-cover rounded-lg"
          />
        )}
        <div className="absolute top-0 flex justify-center items-center left-0 rounded-lg w-full h-full bg-[#00000080]">
          <h4 className="text-[#FFF] text-[14px] font-medium">
            {service?.title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
