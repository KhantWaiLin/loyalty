import React from "react";
import { useNavigate } from "react-router-dom";

import FooterButton from "../footer_button/FooterButton";

import Home from "../icons/HomeIcon";
import QR from "../icons/QRIcon";
import Reward from "../icons/RewardIcon";
import User from "../icons/UserIcon";

import "./Footer.scss";

const Footer = () => {
  const navigate = useNavigate();
  const buttons = [
    { label: "Home", route: "/", icon: Home },
    { label: "QR", route: "/qr", icon: QR },
    { label: "Reward", route: "/reward", icon: Reward },
    { label: "Profile", route: "/profile", icon: User },
  ];

  return (
    <div className="footer-wrapper w-full flex justify-between absolute py-2 px-4 pb-[34px] bottom-0">
      {buttons.map((button) => (
        <FooterButton
          key={button.route}
          isActive={window.location.pathname === button.route}
          label={button.label}
          icon={button.icon}
          onClick={() => {
            navigate(button.route);
          }}
        />
      ))}
    </div>
  );
};

export default Footer;
