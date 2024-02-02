import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../../api/api";
import { api_routes } from "../../../utils/apiRoute";
import { getUserBrandMemberId } from "../../../utils/getBrandUserId";

import BackArrow from "../../../assets/icons/back_arrow.svg";

import Loader from "../../../components/loader/Loader";
import "./ChangeNumber.scss";

const ChangeNumber = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("tab 1");
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [profile, setProfile] = useState(null);
  const { get_member_info, change_number, send_otp } = api_routes;
  const { brand_id, user_id } = getUserBrandMemberId();

  const navigate = useNavigate();

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

  const on_send_otp = async () => {
    setIsLoading(true);
    const data = {
      isForget: false,
      Phone: number,
      userType: 2,
    };
    await api.postOtp(send_otp, data).then((response) => {
      console.log(response);
      setIsLoading(false);
      setActiveTab("tab 3");
    });
  };

  const on_update_number = async () => {
    setIsLoading(true);
    const data = {
      otp: otp.join(""),
      phoneNo: number,
      userId: user_id,
    };
    await api.postByBody(change_number, data).then((response) => {
      console.log(response?.data);
      navigate("/profile");
      setIsLoading(false);
    });
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < otp.length - 1 && value !== "") {
        document.getElementById(`otp-input-${index + 1}`).focus();
      } else if (index > 0 && value === "") {
        document.getElementById(`otp-input-${index + -1}`).focus();
      }
    }
  };

  const on_change_number = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNumber(value);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-full items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="change-number-wrapper h-full relative flex flex-col py-4 px-6 w-full overflow-scroll">
      {activeTab === "tab 1" && (
        <div className="absolute flex flex-col items-center justify-center w-full top-[40%] left-0">
          <div className="flex items-center justify-center gap-3 mb-5">
            <h2 className="text-[18px] font-semibold">Your Number</h2>
            <span className="font-semibold text-[18px]">:</span>
            <h2 className="text-[18px] font-semibold">{profile?.phoneNo}</h2>
          </div>
          <button
            className="change-number-btn text-white font-medium rounded-lg
          w-[80%]  p-4"
            onClick={() => setActiveTab("tab 2")}
          >
            Change Number
          </button>
        </div>
      )}
      {activeTab === "tab 2" && (
        <div className="w-full h-full flex flex-col">
          <div className="flex absolute p-2 top-0 left-0 bg-[#FFF] shadow-lg w-full justify-between">
            <button
              type="button"
              onClick={() => setActiveTab("tab 1")}
              className="w-[50px] h-[50px] flex items-center justify-center border-[1px] border-[#F0F1F3] rounded-lg bg-[#FAFAFA]  text-white"
            >
              <img src={BackArrow} alt="back-icon" className="w-6 h-6" />
            </button>
            <h1 className="flex w-auto flex-1 text-[#48505E] justify-center items-center text-[16px] font-medium">
              Update Number
            </h1>
          </div>
          <input
            type="text"
            placeholder="09"
            value={number}
            onChange={on_change_number}
            className="mt-20 focus:outline-none p-3 w-full mb-[40px] shadow-lg rounded-lg"
          />
          <button
            className="change-number-btn absolute left-0 bottom-5 text-white font-medium rounded-lg
          w-full p-4"
            onClick={on_send_otp}
          >
            Update Number
          </button>
        </div>
      )}

      {activeTab === "tab 3" && (
        <>
          <div className="flex absolute p-2 top-0 left-0 bg-[#FFF] shadow-lg w-full justify-between">
            <button
              type="button"
              onClick={() => setActiveTab("tab 2")}
              className="w-[50px] h-[50px] flex items-center justify-center border-[1px] border-[#F0F1F3] rounded-lg bg-[#FAFAFA]  text-white"
            >
              <img src={BackArrow} alt="back-icon" className="w-6 h-6" />
            </button>
            <h1 className="flex w-auto flex-1 text-[#48505E] justify-center items-center text-[16px] font-medium">
              OTP
            </h1>
          </div>
          <div className="w-full mt-20 h-full relative flex flex-col">
            <p className="text-[#48505E] text-[14px] font-normal">
              Enter the 6-digit codes sent to {number}
            </p>
            <div className="w-full mt-5 flex justify-between">
              {otp.map((digit, index) => (
                <input
                  type="text"
                  id={`otp-input-${index}`}
                  key={index}
                  value={digit}
                  onChange={(e) => handleInputChange(e, index)}
                  maxLength="1"
                  className="w-[50px] text-center flex justify-center h-[50px] shadow-lg focus:outline-none border-gray border-[1px] rounded-lg"
                />
              ))}
            </div>
            <button
              className="change-number-confirm-btn absolute left-0 bottom-5 text-white font-medium rounded-lg
          w-full p-4"
              onClick={on_update_number}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChangeNumber;
