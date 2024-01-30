import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import QR from "./pages/QR";
import Reward from "./pages/Reward";
import RewardDetail from "./pages/RewardDetail";
import MyCouponList from "./pages/my-coupon/MyCouponList";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-coupon" element={<MyCouponList />} />
    </Routes>
  );
};

export default Routers;
