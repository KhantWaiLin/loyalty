import React from "react";
import Footer from "./footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="w-[100vw] flex  justify-center h-[100vh]">
      <div className="w-[428px] justify-between relative h-full bg-gray-50">
        {children}

        {location?.pathname !== "/" && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
