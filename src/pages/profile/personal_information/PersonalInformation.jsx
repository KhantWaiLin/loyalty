import React, { useEffect, useState } from "react";

import "./PersonalInformation.scss";

import Loader from "../../../components/loader/Loader";

import api from "../../../api/api";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";

const PERSONAL_DATA = {
  name: "Name",
  email: "Email",
  phoneNo: "Phone No",
  memberType: "Member Type",
  address: "Address",
};

const PersonalInformation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState(null);

  const { get_member_info } = api_routes;
  const { brand_id, user_id } = getUserBrandMemberId();

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

  if (isLoading && profile === null) {
    return (
      <div className="personal-information-wrapper items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="personal-information-wrapper flex flex-col p-4  w-full overflow-scroll">
      <h1 className="text-[24px] w-full flex justify-center font-medium mb-4">
        Personal Information
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
          {Object.keys(PERSONAL_DATA)?.map((key) => (
            <div className="flex gap-2" key={key}>
              <label className="font-medium">{PERSONAL_DATA[key]}</label>
              <span>:</span>
              <p>{profile && profile[key]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
