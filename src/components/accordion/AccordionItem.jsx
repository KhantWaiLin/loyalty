import React, { useState } from "react";

import Down_Icon from "../../assets/icons/down_icon.svg";

const AccordionItem = ({ item, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        className="p-3 w-full flex items-center justify-between rounded-lg border-[1px] border-[#F0F1F3]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{item?.accordion_name}</span>
        <img src={Down_Icon} alt="drop-down-icon" />
      </button>
      {isOpen && <div className="w-full">{children}</div>}
    </div>
  );
};

export default AccordionItem;
