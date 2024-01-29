import React from "react";
import "./PopUp.scss";

const PopUp = ({ title, desc, onClick }) => {
  return (
    <div
      className="popup-bg flex w-full h-full justify-center z-10 items-center absolute  left-0 top-0"
      onClick={() => onClick(false)}
    >
      <div className="popup-container p-4 bg-white z-20 border-black border-[1px] rounded-lg">
        <h1 className="text-[22px]">{title}</h1>
        <p className="mb-4">{desc}</p>
        <div className="flex gap-5 justify-end items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick(false);
            }}
            className="px-2 py-1 bg-transparent border-black border-[1px] rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick(true);
            }}
            className="px-2 py-1 bg-blue-200 rounded-lg"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
