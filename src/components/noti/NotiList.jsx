import React, { useState } from "react";
import NotiIcon from "../../assets/icons/noti_icon.svg";
import Noti from "./Noti";

const NotiList = ({ noti_list }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full cursor-pointer relative h-full justify-center flex items-center rounded-lg bg-[#FAFAFA]"
      >
        <img src={NotiIcon} alt="noti-icon" className="w-5 h-5" />
        <div className="w-[10px] h-[10px] rounded-full bg-[#F00] absolute top-3 right-3 " />
      </button>
      {isOpen && (
        <>
          <div className="w-[250px] h-[186px] absolute top-[100px] overflow-scroll flex flex-col justify-start no-scrollbar right-5 z-20 bg-[#FFF] rounded-lg shadow-lg">
            {noti_list?.length > 0 ? (
              noti_list?.map((noti) => (
                <Noti
                  key={noti?.id}
                  noti={noti}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                />
              ))
            ) : (
              <p className="w-full relative top-[40%] text-center text-[#667085]">
                No Results Found.
              </p>
            )}
          </div>
          <div
            className="fixed w-full h-full z-10 left-0 top-0"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </>
      )}
    </>
  );
};

export default NotiList;
