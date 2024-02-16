import {React, useState, useEffect} from "react";
import Img from "../image 4.png";
import { myCouponData } from "../../../data";
import Available from "./Available";
import Used from "./Used";
import Expired from "./Expired";

import Loader from "../../../components/loader/Loader";
import api from "../../../api/api";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";

function CouponList({ status }) {
  let btn = "";
  let type = 0;
  const { coupon_list } = api_routes;
  const [couponList, setCouponList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  if (status === "Available") {
    btn = <Available />;
    type = 0;
  } else if (status === "Used") {
    btn = <Used />;
    type = 1;
  } else {
    btn = <Expired />;
    type = 2;
  }

  const fetchCouponData = async () => {
    setIsLoading(true);
    const { brand_id, user_id } = getUserBrandMemberId();

    try {
      const response = await api.postByBody(coupon_list, 
        { 
          brandId: brand_id ,
          customerId: user_id,
          type:type,
        });
      //console.log(response.data.value.data.data);
      setCouponList(response?.data?.value?.data?.data);
    } catch (error) {
      console.error("Error fetching coupon data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  useEffect(() => {
    fetchCouponData();
  }, [type]);

  if (isLoading) {
    return (
      <div className="reward-wrapper items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }

  return couponList?.map((coupon) => {
      return (
        <div
          className=" w-full h-[100px] my-[20px] bg-white rounded-[20px] flex gap-[8px] px-[12px] py-[10px] border border-gray-100 shadow-md"
        >
          <section className="flex justify-center basis-1/4">
            <div className="inline-flex items-center justify-center w-20 h-20 py-4 rounded-lg bg-indigo-50">
              <div className="w-20 h-12 mix-blend-darken ">
                <img src={coupon.image} alt={coupon.itemName}/>
              </div>
            </div>
          </section>
          <section className="flex flex-col basis-2/4 justify-evenly">
            <p className="text-sm font-medium leading-normal text-gray-600">
              {coupon.itemName}
            </p>
            {coupon.status === 1 && type === 0 ? (
              <div className="w-[66px] h-[26px] px-3 py-1 bg-amber-500 bg-opacity-10 rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
                <p className="text-amber-500 text-[10px] font-medium leading-[18px]">
                  Pending
                </p>
              </div>
            ) : (
              <div className=" text-gray-400 text-[10px] font-normal  leading-tight">
                {formatDate(coupon.redeemDate)}
              </div>
            )}
          </section>
          <section className="flex items-center h-full basis-1/4">
            {btn}
          </section>
        </div>
      );
    }
  );
}

export default CouponList;
