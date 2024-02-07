import React, { useState } from "react";
import CouponList from "./components/CouponList";
import { useNavigate } from "react-router-dom";

import "./MyCoupon.scss";

function MyCoupon({ couponList }) {
  const [status, setStatus] = useState("Available");

  let navigate = useNavigate();

  const handleStatus = (status) => {
    setStatus(status.innerText);
  };

  const handleBack = () => {
    navigate(`/home`);
  };

  return (
    <main className="flex flex-col overflow-hidden my-coupon">
      {/* header */}
      <header className="flex items-center mt-8 basis-1/12">
        <div className="w-[50px] cursor-pointer h-[50px] p-[13px] ms-[20px] bg-neutral-50 rounded-lg border border-gray-100 justify-center items-center inline-flex">
          <div
            onClick={(event) => handleBack(event)}
            className="relative flex flex-col items-start justify-start w-6 h-6 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </div>
        <h1 className="ms-28 text-gray-600 text-base font-medium leading-[18px]">
          Coupons
        </h1>
      </header>
      {/* header */}

      {/*  Available & Used Expired bar */}
      <section className="mt-4 basis-1/12">
        <article className="flex items-center h-full">
          <h1
            onClick={(event) => handleStatus(event.target)}
            className={` text-xs leading-[18px] font-semibold  py-3 text-center border-b-2 cursor-pointer basis-1/3 ${
              status === "Available"
                ? "text-indigo-700 border-[#384BCA]"
                : "border-[#F0F1F3] text-[#667085]"
            }`}
          >
            Available
          </h1>
          <h1
            onClick={(event) => handleStatus(event.target)}
            className={`text-xs leading-[18px] font-semibold py-3 text-center border-b-2 cursor-pointer basis-1/3 ${
              status === "Used"
                ? "text-indigo-700 border-[#384BCA]"
                : "border-[#F0F1F3] text-[#667085]"
            }`}
          >
            Used
          </h1>
          <h1
            onClick={(event) => handleStatus(event.target)}
            className={`text-xs leading-[18px] font-semibold py-3 text-center border-b-2 cursor-pointer basis-1/3 ${
              status === "Expired"
                ? "text-indigo-700 border-[#384BCA]"
                : "border-[#F0F1F3] text-[#667085]"
            }`}
          >
            Expired
          </h1>
        </article>
      </section>
      {/*  Available & Used Expired bar */}

      {/* body or Coupon Data */}
      <section className=" basis-10/12 px-[20px]">
        <article className="overflow-auto h-[70%] scroll-smooth no-scrollbar">
          <CouponList status={status} />
        </article>
      </section>
      {/* body or Coupon Data */}
    </main>
  );
}

export default MyCoupon;
