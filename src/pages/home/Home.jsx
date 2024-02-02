import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import Noti from "../../components/Noti";
import PointTotal from "../../components/point_total/PointTotal";
import Coupon from "../../components/coupon/Coupon";
import PromotionCard from "../../components/PromotionCard";
import BlogCard from "../../components/BlogCard";
import Loader from "../../components/loader/Loader";
import HomeServiceCard from "../../components/HomeServiceCard";
import UserInfo from "./components/UserInfo";

import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";

import { blog_data } from "../../data";

import "swiper/css";
import "swiper/css/navigation";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const [pointData, setPointData] = useState(null);
  const [promotionData, setPromotionData] = useState(null);
  const [serviceData, setServiceData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { get_member_info, promotion_list, service_list } = api_routes;

  const get_data = async () => {
    setIsLoading(true);
    const { brand_id, user_id } = getUserBrandMemberId();
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

    await api
      .postByBody(service_list, { brandId: brand_id })
      .then((response) => {
        setServiceData(response?.data?.value?.data?.data[0]?.catList);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    get_data();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <div className="home-wrapper items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="home-wrapper p-5 w-full overflow-hidden">
      <div className="flex justify-between items-center mt-2  mb-8">
        <div className="flex-1">
          <UserInfo user={pointData} />
        </div>
        <div className="w-[50px] h-[50px]">
          <Noti />
        </div>
      </div>
      <div className="flex w-full gap-4 mb-5">
        <div className="w-[74%] h-fit">
          <PointTotal point_data={pointData} />
        </div>
        <div
          className="w-[26%] h-[90px]"
          onClick={() => navigate("/my-coupon")}
        >
          <Coupon />
        </div>
      </div>
      <div className="scroll-container w-full pb-5 overflow-scroll no-scrollbar">
        <div className="flex flex-col mb-5">
          <div className="flex justify-between mb-5">
            <h1 className="text-[#48505E] font-medium text-[16px]">
              Promotion
            </h1>
            <a
              type="button"
              className="text-[#384BCA] font-normal text-[14px]"
              href="/promotionlist"
            >
              View all
            </a>
          </div>
          <Swiper
            grabCursor={true}
            loop={true}
            modules={[Autoplay]}
            className="w-full"
          >
            {promotionData?.map((promotion) => (
              <SwiperSlide key={promotion?.id}>
                <div className="w-[378px] h-[160px]">
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
            <h1 className="text-[#48505E] font-medium text-[16px]">Blog</h1>
            <button
              type="button"
              className="text-[#384BCA] font-medium text-[12px]"
            >
              View all
            </button>
          </div>
          <Swiper loop={true} modules={[Autoplay]} className="w-full">
            {blog_data?.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div>
                  <BlogCard blog={blog} onClick={() => {}} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between mb-5">
            <h1 className="text-[#48505E] font-medium text-[16px]">Services</h1>
            <a
              type="button"
              className="text-[#384BCA] font-medium text-[12px]"
              href="/servicelist"
            >
              View all
            </a>
          </div>
          <Swiper
            loop={true}
            modules={[Autoplay]}
            slidesPerView={2}
            className="w-full"
          >
            {serviceData?.map((service) => (
              <SwiperSlide key={service.cateGoryId}>
                <div className="w-[180px] h-[120px]">
                  <HomeServiceCard
                    service={service}
                    onClick={() => navigate(`/service/${service?.cateGoryId}`)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
