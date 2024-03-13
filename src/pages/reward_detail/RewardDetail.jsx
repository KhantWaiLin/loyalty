import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

import Loader from "../../components/loader/Loader";

import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";

import BackArrow from "../../assets/icons/back_arrow.svg";
import PointIcon from "../../assets/icons/point_icon.svg";
import { reward } from "../../layouts/icons/RewardIcon";

import "./RewardDetail.scss";
import RedeemModal from "../../components/modals/redeem_modal/RedeemModal";
import QrModal from "../../components/modals/qr_modal/QrModal";

import { LanguageContext } from "../../LanguageContext";

const RewardDetail = () => {
  const { t, changeLanguage } = useContext(LanguageContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRedeem, setIsRedeem] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const { reward_list, redeem_pending } = api_routes;

  const { brand_id, user_id } = getUserBrandMemberId();

  const get_detail = async (id) => {
    setIsLoading(true);
    await api
      .postByBody(reward_list, { brandId: brand_id })
      .then((response) => {
        setData(
          response?.data?.value?.data?.data?.find((item) => item.id === id)
        );
      });
    setIsLoading(false);
  };

  const confirm_redeem = async () => {
    setIsLoading(true);
    await api
      .postByBody(redeem_pending, {
        redeemProductId: data?.id,
        brandId: brand_id,
        memberId: user_id,
      })
      .then((response) => {
        if (response?.data?.value?.code === 200) {
          setIsRedeem(true);
        }
      })
      .catch((error) => console.log(error));
    setIsLoading(false);
  };

  useEffect(() => {
    get_detail(id);
    changeLanguage(localStorage.getItem("language"));
    // eslint-disable-next-line
  }, [id]);

  const onClick = (is_ok) => {
    if (is_ok) {
      confirm_redeem();
    }
    setShowPopup(false);
  };

  if (isLoading) {  
    return (
      <div className="w-full h-full items-center flex flex-col justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="reward-detail relative p-4 w-full h-full overflow-hidden">
      {showPopup && (
        <RedeemModal
          title="Redeem item?"
          desc="Sure you want to redeem this item!"
          onClick={onClick}
          image={reward}
        />
      )}
      
      {showQr && <QrModal setIsClick={setShowQr} image={<QRCode value={data?.id} fgColor="#384BCA"/>}/>}
      <div className="reward-detail-wrapper w-full relative overflow-hidden">
        <div className="flex w-full items-center mt-5 justify-between mb-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-[50px] h-[50px] flex items-center justify-center border-[1px] border-[#F0F1F3] rounded-lg bg-[#FAFAFA]  text-white"
          >
            <img src={BackArrow} alt="back-icon" className="w-6 h-6" />
          </button>

          <h1 className="flex w-auto flex-1 text-[#48505E] justify-center items-center text-[16px] font-medium">
            {t('rewardDetail')}
          </h1>
          {/* <button
            className="flex w-[50px] h-[50px] items-center justify-center border-[1px]
         border-[#F0F1F3] rounded-lg bg-[#FAFAFA]"
          >
            <img src={Heart} alt="heart-icon" className="w-5 h-5" />
          </button> */}
        </div>
        <div className="scroll-container w-full overflow-scroll no-scrollbar">
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex justify-center items-center bg-[#EBF2FF] rounded-lg h-[200px]">
              <img
                src={data?.image}
                alt="detail-img"
                className=" w-[85%] h-[85%] object-contain"
              />
            </div>
            <div className="flex gap-2 justify-between">
              {Array.from({ length: 5 }, (_, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center rounded-lg bg-[#EBF2FF]"
                >
                  <img
                    src={data?.image}
                    alt="detail-img"
                    className=" w-[85%] items-center h-[85%] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <h1 className="text-[20px] text-[#48505E] font-medium">
              {data?.name}
            </h1>
            {isRedeem && (
              <p className="px-4 py-1 flex items-center rounded-lg bg-[#F790091A] text-[#F79009] text-[10px]">
                Pending
              </p>
            )}
          </div>
          <div className="w-full flex flex-wrap mb-8">
            <p className="flex text-[16px] text-justify font-normal text-[#48505E]">
              {data?.description}
            </p>
          </div>
        </div>
      </div>
      <div className="redeem-btn-wrapper w-full shadow-md flex gap-5 justify-between z-10 absolute left-0 py-2 px-4 pb-[34px] bottom-0">
        {isRedeem ? (
          <button
            type="button"
            onClick={() => setShowQr((prev) => !prev)}
            className="redeem-btn flex-1 flex w-full p-4 font-bold justify-center text-[16px] rounded-lg text-[#FFF]"
          >
            {t('collectreward')}
          </button>
        ) : (
          <div className="w-full flex gap-5">
            <button
              className="flex flex-col h-[52px] px-5 justify-center bg-[#F0F1F3] 
          items-center rounded-lg"
            >
              <p className="text-[#667085] font-normal leading-5">Points</p>
              <span className="flex text-[#48505E] font-medium  items-center gap-2">
                {data?.pointRequired} Pts
                <img src={PointIcon} alt="point-icon" className="w-5 h-5" />
              </span>
            </button>
            <button
              type="button"
              onClick={() => setShowPopup(true)}
              className="redeem-btn flex-1 flex w-full p-4 font-bold justify-center text-[16px] rounded-lg text-[#FFF]"
            >
              {t('redeem')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardDetail;
