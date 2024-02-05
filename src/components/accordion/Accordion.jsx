import React from "react";

const Accordion = ({ children }) => {
  return <div className="flex flex-col w-full gap-3 accordion">{children}</div>;
};

export default Accordion;
