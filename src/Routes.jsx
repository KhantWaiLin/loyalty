import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import QR from "./pages/QR";
import Reward from "./pages/Reward";
import RewardDetail from "./pages/RewardDetail";
import MyCoupon from "./pages/my-coupon/MyCoupon";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-coupon" element={<MyCoupon />} />
    </Routes>
  );
};

export default Routers;
