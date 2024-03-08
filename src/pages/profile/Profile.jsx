import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../../components/loader/Loader";

import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";

import "./Profile.scss";
import Accordion from "../../components/accordion/Accordion";
import AccordionItem from "../../components/accordion/AccordionItem";

import { LanguageContext } from "../../LanguageContext";

const Profile = () => {
  const { t, changeLanguage } = useContext(LanguageContext);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const PROFILE_DATA = [
    {
      accordion_name: t('personalInformation'),
      accordion_content: [
        { name: t('myAccount'), route: "my-account" },
        { name: t('changeNumber'), route: "change-number" },
        { name: t('changePassword'), route: "change-password" },
      ],
    },
    {
      accordion_name: "Loyalty",
      accordion_content: [
        { name: t('transaction'), route: "transaction-history" },
        { name: t('membership'), route: "membership-tire-level" },
      ],
    },
    {
      accordion_name: t('setting'),
      accordion_content: [
        { name: t('language'), route: "language"},
        { name: t('general'), route: 'general'},
        { name: t('helpCenter'), route: "help-center" },
        { name: t('terms'), route: "terms" },
      ],
    },
  ];

  const { get_member_info, log_out, upload_photo } = api_routes;
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
    changeLanguage(localStorage.getItem("language"));
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

  const handleFileChange = async (event) => {
    const picture = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result.split(",")[1]; // Extract Base64 content without the prefix
  
      try {
        await api.postByFile(upload_photo, {
          brandId: brand_id,
          memberId: user_id,
          image: base64String,
        });
      } catch (error) {
        console.error("Error saving blog:", error);
      }
    };
  
    if (picture) {
      reader.readAsDataURL(picture);
    }
  };
  

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center profile-wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full overflow-hidden profile-wrapper no-scrollbar">
      <section className="bg-indigo-700 min-h-[172px] shadown-xl basis-3/12 flex flex-col">
        <article className="flex mx-[20px] mt-[72.5px] mb-[19.5px] justify-between items-center ">
          {/* User name and email */}
          <div className="flex flex-col  justify-evenly w-[155px] h-[80px]">
            <p className="text-xl font-bold leading-normal text-white">
              {profile?.name}
            </p>
            <p className="text-sm font-medium leading-normal text-white">
              {profile?.email}
            </p>
          </div>
          {/* User name and email */}

          {/* User Image */}
          <div className="relative z-10 w-[80.78px] h-[80.78px] rounded-full  bg-white ">
            {profile?.image?.length > 0 ? (
              <img
                src={profile.image}
                alt="profile-img"
                className="w-full h-full rounded-full"
              />
            ) : (
              <div className="w-full h-full border-black border-[1px] rounded-full" />
            )}
            {/* camera icon */}
            <label htmlFor="fileInput" className="absolute z-50 bottom-1 -right-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 p-1 m-1 bg-white rounded-full "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>
              <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
            </label>
            {/* camera icon */}
          </div>
          {/* User Image */}
        </article>
      </section>

      {/* Personal Information */}
      <section className="px-4 py-3 overflow-auto basis-9/12 no-scrollbar">
        <Accordion>
          {PROFILE_DATA?.map((item) => (
            <AccordionItem key={item?.accordion_name} item={item}>
              <div className="flex flex-col rounded-lg border-[1px] border-[#F0F1F3] mt-2">
                {item?.accordion_content?.map((d_item, index) => (
                  <button
                    className={`px-6 py-4 flex hover:bg-gray-200 ${
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
                    <span className="text-sm font-normal leading-tight text-gray-600">
                      {d_item.name}
                    </span>
                  </button>
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
        <button
          className="logout-btn px-4 py-2 w-full mt-5 rounded-lg text-[#FFF]"
          type="button"
          onClick={on_log_out}
        >
          {t('logout')}
        </button>
      </section>
      {/* Personal Information */}
    </div>
  );
};

export default Profile;
