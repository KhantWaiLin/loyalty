import React, { useMemo } from "react";
import Footer from "./footer/Footer";
import { useLocation } from "react-router-dom";

import { active_home, home } from "./icons/HomeIcon";
import QR from "./icons/QRIcon";
import { reward, active_reward } from "./icons/RewardIcon";
import { user, user_active } from "./icons/UserIcon";

const Layout = ({ children }) => {
  const location = useLocation();
  const buttons = [
    { label: "Home", route: "/home", icon: home, activeIcon: active_home },
    { label: "QR", route: "/qr", icon: QR },
    {
      label: "Reward",
      route: "/reward",
      icon: reward,
      activeIcon: active_reward,
    },
    {
      label: "Profile",
      route: "/profile",
      icon: user,
      activeIcon: user_active,
    },
  ];
  const isShowFooter = useMemo(() => {
    if (
      location.pathname === "/" ||
      location.pathname.includes("/reward/") ||
      location.pathname === "/profile/change-number" ||
      location.pathname.includes('/blog/') ||
      location.pathname.includes('/profile/my-account')
    ) {
      return false;
    }
    return true;
  }, [location.pathname]);

  return (
    <div className="w-[100vw] flex  justify-center h-[100vh]">
      <div className="w-[428px] justify-between relative h-full bg-[#FFF]">
        {children}
        {isShowFooter && <Footer buttons={buttons} />}
      </div>
    </div>
  );
};

export default Layout;
