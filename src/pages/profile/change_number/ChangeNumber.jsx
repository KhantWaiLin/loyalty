import React, { useEffect, useState } from "react";
import "./ChangeNumber.scss";
import api from "../../../api/api";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";
import Loader from "../../../components/loader/Loader";

const ChangeNumber = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [number, setNumber] = useState("");
  const [profile, setProfile] = useState(null);
  const { get_member_info, change_number } = api_routes;
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

  const update_number = () => {
    setIsLoading(true);
    const data = {
      opt: null,
      phoneNo: number,
      userId: user_id,
    };
    api.postByBody(change_number, data).then((response) => {
      console.log(response);
      setIsLoading(false);
    });
  };

  if (isLoading) {
    return (
      <div className="change-number-wrapper items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="change-number-wrapper relative flex flex-col py-4 px-6 w-full overflow-scroll">
      {isChange ? (
        <div className="w-full flex flex-col">
          <h2 className="text-[18px] font-semibold mb-8">Update Number</h2>
          <input
            type="text"
            placeholder="09"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="focus:outline-none p-3 w-full mb-[40px]"
          />
          <button
            className="change-number-btn text-white font-medium rounded-lg
          w-full p-4"
            onClick={update_number}
          >
            Update Number
          </button>
        </div>
      ) : (
        <div className="absolute flex flex-col items-center justify-center w-full top-[40%] left-0">
          <div className="flex items-center justify-center gap-3 mb-5">
            <h2 className="text-[18px] font-semibold">Your Number</h2>
            <span className="font-semibold text-[18px]">:</span>
            <h2 className="text-[18px] font-semibold">{profile?.phoneNo}</h2>
          </div>
          <button
            className="change-number-btn text-white font-medium rounded-lg
          w-[80%]  p-4"
            onClick={() => setIsChange((prev) => !prev)}
          >
            Change Number
          </button>
        </div>
      )}
    </div>
  );
};

export default ChangeNumber;
