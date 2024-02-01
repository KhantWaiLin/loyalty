import React from "react";
import Img from "../image 4.png";
import { myCouponData } from "../../../data";
import Available from "./Available";
import Used from "./Used";
import Expired from "./Expired";

function CouponList({ status }) {
  let btn = "";

  if (status === "Available") {
    btn = <Available />;
  } else if (status === "Used") {
    btn = <Used />;
  } else {
    btn = <Expired />;
  }

  return myCouponData.map((coupon, index) => {
    if (coupon.status === status) {
      return (
        <div
          key={index}
          className=" w-full h-[100px] my-[20px] bg-white rounded-[20px] flex gap-[8px] px-[12px] py-[10px] border border-gray-100 shadow-md"
        >
          <section className="flex justify-center basis-1/4">
            <div className="inline-flex items-center justify-center w-20 h-20 py-4 rounded-lg bg-indigo-50">
              <div className="w-20 h-12 mix-blend-darken ">
                <img src={Img} alt={coupon.name}/>
              </div>
            </div>
          </section>
          <section className="flex flex-col basis-2/4 justify-evenly">
            <p className="text-sm font-medium leading-normal text-gray-600">
              {coupon.name}
            </p>
            {coupon.status === "Available" ? (
              <div className="w-[66px] h-[26px] px-3 py-1 bg-amber-500 bg-opacity-10 rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
                <p className="text-amber-500 text-[10px] font-medium leading-[18px]">
                  Pending
                </p>
              </div>
            ) : (
              <div className=" text-gray-400 text-[10px] font-normal  leading-tight">
                {coupon.date}
              </div>
            )}
          </section>
          <section className="flex items-center h-full basis-1/4">
            {btn}
          </section>
        </div>
      );
    }
  });
}

export default CouponList;
