import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import QR from "./pages/QR";
import Reward from "./pages/Reward";
import RewardDetail from "./pages/RewardDetail";
import UseCoupon from "./pages/use-coupon/UseCoupon";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/use-coupon" element={<UseCoupon />} />
    </Routes>
  );
};

export default Routers;
