import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-[100vw] flex  justify-center h-[100vh]">
      <div className="w-[428px] h-full bg-slate-300">{children}</div>
    </div>
  );
};

export default Layout;
