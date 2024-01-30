import React, { useEffect, useState } from "react";

import Loader from "../../../components/loader/Loader";

import api from "../../../api/api";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";

import "./MemberTireLevel.scss";

const MemberTireLevel = () => {
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

  console.log(data);

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
    <div className="member-tire-wrapper flex flex-col py-4 px-6 w-full overflow-scroll">
      <h1 className="text-[24px] w-full flex justify-center font-medium mb-10">
        Member Tire Level
      </h1>
      <table className="w-full border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-500 p-2">Name</th>
            <th className="border border-gray-500 p-2">Image</th>
            <th className="border border-gray-500 p-2">Usage</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item?.name}>
              <td className="border border-gray-500 p-2">{item?.name}</td>
              <td className="border border-gray-500 p-2">
                <img
                  src={item?.image}
                  alt="level-img"
                  className="w-[50px] h-[50px]"
                />
              </td>
              <td className="border border-gray-500 p-2">{item?.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTireLevel;
