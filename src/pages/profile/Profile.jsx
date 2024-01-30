import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandId } from "../../utils/getBrandUserId";

import "./Profile.scss";

const PROFILE_DATA = [
  {
    name: "Personal Information",
    route: "personal-information",
  },
  {
    name: "Transaction History",
    route: "transaction-history",
  },
  {
    name: "Membership tire level",
    route: "membership-tire-level",
  },
  {
    name: "General Setting",
    route: "general-setting",
  },
  {
    name: "Help Center",
    route: "help-center",
  },
  {
    name: "Terms & Condition",
    route: "terms",
  },
];

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { get_member_info } = api_routes;
  const { brand_id, user_id } = getUserBrandId();

  const get_profile_detail = async () => {
    setIsLoading(true);
    await api
      .get(get_member_info, { brandId: brand_id, userId: user_id })
      .then((response) => {
        setProfile(response?.data?.value?.data);
      });
    setIsLoading(false);
  };
  useEffect(() => {
    get_profile_detail();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="profile-wrapper flex flex-col py-4 px-6 w-full overflow-scroll">
      <h1 className="text-[24px] w-full flex justify-center font-medium mb-4">
        Profile
      </h1>
      <div className="flex w-full items-center gap-8 mb-5">
        <div className="w-[100px] h-[100px]">
          {profile?.image?.length > 0 ? (
            <img
              src={profile.image}
              alt="profile-img"
              className="w-full h-full rounded-full"
            />
          ) : (
            <div className="w-full h-full border-black border-[1px] rounded-full" />
          )}
        </div>
        <div>
          <div className="flex gap-2">
            <label className="font-medium">Name</label>
            <span>:</span>
            <p>{profile?.name}</p>
          </div>
          <div className="flex gap-2">
            <label className="font-medium">Phone No</label>
            <span>:</span>
            <p>{profile?.phoneNo}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        {PROFILE_DATA?.map((item) => (
          <div
            key={item?.name}
            className="w-full flex items-center pb-8 border-b-[1px] mb-5 border-black cursor-pointer"
            onClick={() => navigate(item.route)}
          >
            <p>{item?.name}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <button className="bg-blue-400 px-4 py-2 rounded-lg text-white">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Profile;
