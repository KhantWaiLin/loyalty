import React, { useEffect, useState } from "react";

import Loader from "../../../components/loader/Loader";

import api from "../../../api/api";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";

import { Link } from "react-router-dom";

import "./MemberTireLevel.scss";

const MemberTireLevel = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { membership_level } = api_routes;
  const { brand_id, user_id } = getUserBrandMemberId();

  useEffect(() => {
    get_tire_list();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <div className="member-tire-wrapper items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }

  const get_tire_list = async () => {
    setIsLoading(true);
    await api
      .get(membership_level, { brandId: brand_id, userId: user_id })
      .then((response) => {
        setData(response?.data?.value?.data);
      });
    setIsLoading(false);
  };

  return (
    <div className="member-tire-wrapper relative flex flex-col w-full overflow-scrol no-scrollbar">
      <header className="flex flex-col z-30 bg-indigo-700 basis-2/12 ps-[20px] pr-[40%]">
        <section className="flex justify-between mt-[20px]">
          <Link
            to="/profile"
            className="flex flex-col items-start justify-start w-6 h-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </Link>
          <h1 className="text-white">Membership</h1>
        </section>
      </header>

      {/* Member Tire Level */}
      <main className="z-50 bg-white absolute left-0 rounded-t-2xl top-16 w-full h-[470px] basis-10/12 overflow-auto no-scrollbar flex flex-col">
        {/* About Member  */}
        <section className="basis-7/12 px-[13px]  pt-[10px] flex flex-col">
          <h1 className="text-base text-indigo-700 font-medium  basis-2/12">
            Hello {data?.name}
          </h1>
          <div className=" basis-7/12 pt-[10px] px-2">
            <article className="bg-indigo-700  w-full h-[120px] rounded-lg px-6 py-3">
              <div className="w-full h-full flex flex-col justify-between">
                <p className="text-white text-base font-normal">Total</p>
                <p className="text-white text-3xl font-semibold text-center">
                  {data?.totalPoint}
                </p>
                <p className="text-white text-base font-normal text-end">
                  Point
                </p>
              </div>
            </article>
          </div>
          <div className="basis-2/12 flex justify-between items-center">
            <div className="flex items-center">
              <p className="text-base text-indigo-700 font-medium">
                Your current Tier
              </p>
              <p className="text-xs font-thin text-black bg-cyan-300 rounded-lg text-center px-2 py-1 ms-3">
                {data?.memberType}
              </p>
            </div>
            <Link
              to="/profile/membership-tire-level/view-tier-benefits"
              className="text-sm text-indigo-700 border-b border-b-indigo-700"
            >
              View Tier Benefits
            </Link>
          </div>
          <p className="text-xs text-indigo-700 font-normal basis-1/12">
            {data?.alert}
          </p>
        </section>
        {/* About Member */}

        {/* Point History or Transaction History Link */}
        <section className="basis-1/12 ">
          <Link
            to="/profile/transaction-history"
            className="text-base  font-normal w-full h-full hover:bg-slate-200 flex items-center"
          >
            <div className="px-[13px]">View my points history</div>
          </Link>
        </section>
        {/* Point History or Transaction History Link */}

        {/* View expire points Link */}
        <section className="basis-1/12  flex items-center">
          <Link className="text-base font-normal w-full h-full hover:bg-slate-200 flex items-center">
            <div className="px-[13px]">View expire points</div>
          </Link>
        </section>
        {/* View expire points Link */}

        <section className="basis-3/12 "></section>
      </main>
      {/* Member Tire Level */}
    </div>
  );
};

export default MemberTireLevel;
