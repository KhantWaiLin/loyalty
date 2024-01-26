import React from "react";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-[100vw] flex  justify-center h-[100vh]">
      <div className="w-[428px] justify-between relative h-full bg-gray-50">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
