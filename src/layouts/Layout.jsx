import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-[100vw] flex  justify-center h-[100vh]">
      <div className="w-[428px] justify-between relative h-full bg-slate-100">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
