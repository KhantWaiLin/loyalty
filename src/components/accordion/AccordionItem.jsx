import React, { useState } from "react";

import Down_Icon from "../../assets/icons/down_icon.svg";

import AccordionHeader from "./AccordionHeader";

const AccordionItem = ({ item, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        className="px-6 py-4 w-full  flex items-center justify-between rounded-lg border-[1px] border-[#F0F1F3]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <AccordionHeader accordion_name={item?.accordion_name} />
        <img src={Down_Icon} alt="drop-down-icon" />
      </button>
      {isOpen && <div className="w-full">{children}</div>}
    </div>
  );
};

export default AccordionItem;
