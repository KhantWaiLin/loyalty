import React, { useMemo } from "react";
import Footer from "./footer/Footer";
import { useLocation } from "react-router-dom";

import { active_home, home } from "./icons/HomeIcon";
import QR from "./icons/QRIcon";
import { reward, active_reward } from "./icons/RewardIcon";
import { user, user_active } from "./icons/UserIcon";
import './layout.scss'

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
      location.pathname.includes('/profile/my-account') ||
      location.pathname.includes('/register') ||
      location.pathname.includes('/login') ||
      location.pathname.includes('/forgotpassword') ||
      location.pathname.includes('profile/change-password') ||
      location.pathname.includes('/profile/help-center') ||
      location.pathname.includes('/profile/terms')
    ) {
      return false;
    }
    return true;
  }, [location.pathname]);

  const isTermsPage = useMemo(() => location.pathname.includes('/profile/terms'), [location.pathname]);

  return (
    <div className={` ${isTermsPage ? 'desktop-view' : 'w-[100vw] flex  justify-center h-[100vh]'}`}>
      <div className={`${isTermsPage ? 'desktop-terms' : 'w-[428px] justify-between relative h-full bg-[#FFF] poppins '}`}>
        {children}
        {isShowFooter && <Footer buttons={buttons} />}
      </div>
    </div>
  );
};

export default Layout;
