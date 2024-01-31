import React from "react";

const Accordion = ({ children }) => {
  return <div className="accordion w-full gap-3 flex flex-col">{children}</div>;
};

export default Accordion;
