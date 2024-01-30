import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Noti from "../../components/Noti";
import PointTotal from "../../components/PointTotal";
import Cupon from "../../components/Cupon";

import { blog_data, service_data } from "../../data";

import "swiper/css";
import "swiper/css/navigation";
import PromotionCard from "../../components/PromotionCard";
import BlogCard from "../../components/BlogCard";

import "./Home.scss";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [pointData, setPointData] = useState(null);
  const [promotionData, setPromotionData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { get_member_info, promotion_list } = api_routes;

  const get_data = async () => {
    setIsLoading(true);
    const auth_data = localStorage.getItem("authenticate_data");
    let brand_id;
    let user_id;
    if (auth_data) {
      const parsed_data = JSON.parse(auth_data);
      brand_id = parsed_data?.brandId;
      user_id = parsed_data?.memberID;
    }
    await api
      .get(get_member_info, { brandId: brand_id, userId: user_id })
      .then((response) => {
        setPointData(response?.data?.value?.data);
      });
    await api
      .postByBody(promotion_list, { brandId: brand_id })
      .then((response) => {
        setPromotionData(response?.data?.value?.data?.data);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    get_data();
    // eslint-disable-next-line
  }, []);

  console.log(promotionData);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="home-wrapper p-4 w-full overflow-scroll">
      <div className="flex justify-end  pb-4">
        <Noti />
      </div>
      <div className="flex gap-4 mb-5">
        <div className="w-[305px] h-[90px]">
          <PointTotal point_data={pointData} />
        </div>
        <div className="w-[100px] h-[90px]">
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
          modules={[Autoplay]}
          className="w-full"
        >
          {promotionData?.map((promotion) => (
            <SwiperSlide key={promotion?.id}>
              <div className="px-2 h-[180px]">
                <PromotionCard
                  promotion={promotion}
                  onClick={() => {
                    navigate(`/promotion/${promotion?.id}`);
                  }}
                />
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
              <div className="px-2 h-[180px]">
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
              <div className="px-2 h-[180px]">
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
