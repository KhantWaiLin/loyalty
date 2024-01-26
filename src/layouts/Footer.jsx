import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-between absolute py-2 px-4 bottom-0">
      <button
        className="px-4 py-2 rounded-lg bg-blue-500 text-white"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        className="px-4 py-2  rounded-lg bg-blue-500 text-white"
        onClick={() => {
          navigate("/qr");
        }}
      >
        QR
      </button>
      <button
        className="px-4 py-2  rounded-lg bg-blue-500 text-white"
        onClick={() => {
          navigate("/reward");
        }}
      >
        Reward
      </button>
      <button
        className="px-4 py-2  rounded-lg bg-blue-500 text-white"
        onClick={() => {
          navigate("/profile");
        }}
      >
        Profile
      </button>
    </div>
  );
};

export default Footer;
