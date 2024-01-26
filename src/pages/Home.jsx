import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Noti from "../components/Noti";
import PointTotal from "../components/PointTotal";
import Cupon from "../components/Cupon";

import { promotion_data } from "../data";

import "swiper/css";
import "swiper/css/navigation";
import PromotionCard from "../components/PromotionCard";

const Home = () => {
  return (
    <div className="text-black-500 text-lg px-4 w-full h-full">
      <div className="flex justify-end  py-4">
        <Noti />
      </div>
      <div className="flex  gap-4 mb-5">
        <div className="w-[305px] h-[80px]">
          <PointTotal />
        </div>
        <div className="w-[100px] h-[80px]">
          <Cupon />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between mb-5">
          <h1 className="text-black font-medium text-[16px]">Promotion</h1>
          <button
            type="button"
            className="text-blue-500 font-normal text-[14px]"
          >
            View all
          </button>
        </div>
        <Swiper
          grabCursor={true}
          loop={true}
          autoplay={true}
          modules={[Autoplay]}
          className="w-full"
        >
          {promotion_data?.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="px-2 h-[159px]">
                <PromotionCard name={item.name} desc={item.desc} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
