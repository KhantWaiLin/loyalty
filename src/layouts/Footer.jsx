import React from "react";
import FooterButton from "./FooterButton";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex relative p-2">
      <FooterButton
        lable="Home"
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default Footer;
