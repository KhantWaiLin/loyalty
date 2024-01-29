import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-[100vw] flex  justify-center h-[100vh]">
      <div className="w-[428px] h-full bg-blue-300">{children}</div>
    </div>
  );
};

export default Layout;
