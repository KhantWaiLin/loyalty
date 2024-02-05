import React from "react";
import { useNavigate } from "react-router-dom";

import FooterButton from "../footer_button/FooterButton";

import "./Footer.scss";

const Footer = ({ buttons }) => {
  const navigate = useNavigate();

  return (
    <div className="footer-wrapper w-full flex justify-between z-10 absolute py-2 px-8 pb-[34px] bottom-0">
      {buttons.map((button) => (
        <FooterButton
          key={button.route}
          isActive={window.location.pathname.includes(button.route)}
          label={button.label}
          icon={button.icon}
          activeIcon={button?.activeIcon}
          onClick={() => {
            navigate(button.route);
          }}
        />
      ))}
    </div>
  );
};

export default Footer;
