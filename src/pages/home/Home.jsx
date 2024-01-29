import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Noti from "../../components/Noti";
import PointTotal from "../../components/PointTotal";
import Cupon from "../../components/Cupon";

import { blog_data, promotion_data, service_data } from "../../data";

import "swiper/css";
import "swiper/css/navigation";
import PromotionCard from "../../components/PromotionCard";
import BlogCard from "../../components/BlogCard";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home-wrapper p-4 w-full overflow-scroll">
      <div className="flex justify-end  pb-4">
        <Noti />
      </div>
      <div className="flex gap-4 mb-5">
        <div className="w-[305px] h-[80px]">
          <PointTotal />
        </div>
        <div className="w-[100px] h-[80px]">
          <Cupon />
        </div>
      </div>
      <div className="flex flex-col mb-5">
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
      <div className="flex flex-col mb-5">
        <div className="flex justify-between mb-5">
          <h1 className="text-black font-medium text-[16px]">Blog</h1>
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
          modules={[Autoplay]}
          className="w-full"
        >
          {blog_data?.map((blog) => (
            <SwiperSlide key={blog.name}>
              <div className="px-2 h-[159px]">
                <BlogCard name={blog.name} desc={blog.desc} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between mb-5">
          <h1 className="text-black font-medium text-[16px]">Services</h1>
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
          {service_data?.map((service) => (
            <SwiperSlide key={service.name}>
              <div className="px-2 h-[159px]">
                <BlogCard name={service.name} desc={service.desc} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
