import React from "react";
import "./FooterButton.scss";

const FooterButton = ({ label, icon, onClick, isActive }) => {
  return (
    <button
      type="button"
      className={`w-fit flex flex-col gap-1 items-center ${
        isActive && "active"
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="text-[#667085] text-[12px] font-medium">{label}</span>
    </button>
  );
};

export default FooterButton;
