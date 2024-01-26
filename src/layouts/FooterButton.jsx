import React from "react";

const FooterButton = ({ lable, onClick }) => {
  return (
    <button
      className="py-2 px-3 bg-blue-500 text-white rounded-lg"
      onClick={onClick}
    >
      {lable}
    </button>
  );
};

export default FooterButton;
