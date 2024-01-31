import React, { useState } from "react";
import CouponList from "./components/CouponList";

function MyCoupon({ couponList }) {
  return (
    <main className="flex flex-col h-full">
      {/* header */}
      <header className="flex items-center mt-8 basis-1/12">
        <div class="w-[50px] cursor-pointer h-[50px] p-[13px] ms-[20px] bg-neutral-50 rounded-lg border border-gray-100 justify-center items-center inline-flex">
          <div class="w-6 h-6 relative flex-col justify-start items-start flex">
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
          <h1 className="text-indigo-700 text-xs leading-[18px] font-semibold border-[#F0F1F3] py-3 text-center border-b-2 cursor-pointer hover:border-[#384BCA] basis-1/3 hover:text-[#384BCA]">
            Available
          </h1>
          <h1 className="text-[#667085]  text-xs leading-[18px] font-semibold border-[#F0F1F3] py-3 text-center border-b-2 cursor-pointer basis-1/3 hover:border-[#384BCA] hover:text-[#384BCA]">
            Used
          </h1>
          <h1 className="text-[#667085]  text-xs leading-[18px] font-semibold border-[#F0F1F3] py-3 text-center border-b-2 cursor-pointer basis-1/3 hover:border-[#384BCA] hover:text-[#384BCA]">
            Expired
          </h1>
        </article>
      </section>
      {/*  Available & Used Expired bar */}

      {/* body or Coupon Data */}
      <section className=" basis-10/12 px-[20px]">
        <article className="h-[370px] overflow-auto scroll-smooth no-scrollbar">
          <CouponList />
          <CouponList />
          <CouponList />
          <CouponList />
          <CouponList />
          <CouponList />
        </article>
      </section>
      {/* body or Coupon Data */}
    </main>
  );
}

export default MyCoupon;

// return (<main className="flex flex-col h-full border-2">
//     <section className="flex items-center justify-center basis-1/12">
//         <h1>My Coupon</h1>
//     </section>
//     <section className="px-2 basis-1/12">
//         <ul className="flex items-center justify-between w-1/2 h-full">
//             <li>
//                 <button>Available</button>
//             </li>
//             <li>
//                 <button>Used</button>
//             </li>
//             <li>
//                 <button>Expired</button>
//             </li>
//         </ul>
//     </section>
//     <section className="px-2 basis-9/12">
//         <ul className="mt-1">
//             <CouponItem name="Redeem Product"/>
//             <CouponItem name="Coupon Code"/>
//             <CouponItem name="Redeem Product"/>
//             <CouponItem name="Coupon Code"/>
//         </ul>
//     </section>
//     <section className="basis-1/12">
//         <Footer/>
//     </section>
// </main>);
