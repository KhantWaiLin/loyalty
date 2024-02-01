import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../../components/loader/Loader";

import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";

import "./Profile.scss";
import Accordion from "../../components/accordion/Accordion";
import AccordionItem from "../../components/accordion/AccordionItem";

const PROFILE_DATA = [
  {
    accordion_name: "Personal Information",
    accordion_content: [
      { name: "My Account", route: "my-account" },
      { name: "Change Number", route: "change-number" },
      { name: "Change Password", route: "change-password" },
    ],
  },
  {
    accordion_name: "Loyalty",
    accordion_content: [
      { name: "Transaction History", route: "transaction-history" },
      { name: "Membership Tire Level", route: "membership-tire-level" },
    ],
  },
  {
    accordion_name: "General Setting",
    accordion_content: [
      { name: "Help Center", route: "help-center" },
      { name: "Terms & Condition", route: "terms" },
    ],
  },
];

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { get_member_info, log_out } = api_routes;
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

  const on_log_out = async () => {
    setIsLoading(true);
    await api.post(log_out, { userId: user_id }).then((response) => {
      console.log(response);
      localStorage.clear();
      return navigate("/");
    });
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="profile-wrapper items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
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
      <div className="flex flex-col justify-between mb-8">
        <Accordion>
          {PROFILE_DATA?.map((item) => (
            <AccordionItem key={item?.accordion_name} item={item}>
              <div className="flex flex-col rounded-lg border-[1px] border-[#F0F1F3] mt-2">
                {item?.accordion_content?.map((d_item, index) => (
                  <button
                    className={`p-4 flex hover:bg-gray-200 ${
                      index === 0 && "rounded-t-lg"
                    } ${
                      index + 1 === item?.accordion_content?.length &&
                      "rounded-b-lg"
                    }`}
                    key={d_item?.route}
                    onClick={() => {
                      navigate(d_item.route);
                    }}
                  >
                    {d_item.name}
                  </button>
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="w-full flex justify-center">
        <button
          className="logout-btn px-4 py-2 w-full rounded-lg text-[#FFF]"
          type="button"
          onClick={on_log_out}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Profile;
