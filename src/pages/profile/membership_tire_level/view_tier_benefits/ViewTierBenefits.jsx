import React, { useEffect, useState } from "react";

import Loader from "../../../../components/loader/Loader";

import api from "../../../../api/api";
import { api_routes } from "../../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../../utils/getBrandUserId";

import "./ViewTierBenefits.scss";
import { Link } from "react-router-dom";

const ViewTierBenefits = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { member_tire_level } = api_routes;
  const { brand_id } = getUserBrandMemberId();

  const get_tire_list = async () => {
    setIsLoading(true);
    await api.get(member_tire_level, { brandId: brand_id }).then((response) => {
      setData(response?.data?.value?.data);
    });
    setIsLoading(false);
  };

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

  return (
    <div className="member-tire-wrapper relative flex flex-col w-full overflow-scrol no-scrollbar">
      <header className="flex flex-col z-30 bg-indigo-700 basis-2/12 ps-[20px] pr-[40%]">
        <section className="flex justify-between mt-[20px]">
          <Link
            to="/profile/membership-tire-level"
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
          <h1 className="text-white">Tier Benefits</h1>
        </section>
      </header>

      {/* Member Tire Level */}
      <main className="z-50 bg-white absolute left-0 rounded-t-2xl top-16 w-full h-[470px] basis-10/12 overflow-auto no-scrollbar flex flex-col">
        <h1 className="font-semibold text-base text-center my-[20px]">
          SateKyite Point Membership Level
        </h1>

        <div class="relative overflow-x-auto mx-[12px] rounded-md">
          <table class="w-full text-sm text-center">
            <thead class="text-base bg-indigo-700 text-white ">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-2 border-r border-r-slate-100 font-normal text-base"
                >
                  Usage
                </th>
                <th scope="col" class="px-6 py-2 font-normal text-base">
                  Tire Level
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr key={index} class="odd:bg-gray-100">
                    <td class="px-6 py-2 text-sm font-medium border-r border-r-slate-100">
                      {item?.usage}
                    </td>
                    <td class="px-6 py-2 font-medium text-sm flex justify-start items-center">
                      <img
                        src={item?.image}
                        alt="level-img"
                        className="w-[23px] h-[23px]"
                      />
                      <p className="text-sm ps-2">{item?.name}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
      {/* Member Tire Level */}
    </div>
  );
};

export default ViewTierBenefits;
