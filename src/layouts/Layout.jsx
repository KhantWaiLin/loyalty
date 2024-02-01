import React, { useMemo } from "react";
import Footer from "./footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const isShowFooter = useMemo(() => {
    if (location.pathname === "/" || location.pathname.includes("/reward/")) {
      return false;
    }
    return true;
  }, [location.pathname]);

  return (
    <div className="w-[100vw] flex  justify-center h-[100vh]">
      <div className="w-[428px] justify-between relative h-full bg-[#FFF]">
        {children}
        {isShowFooter && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
