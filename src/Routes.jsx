import { Route, Routes } from "react-router-dom";

import Profile from "./pages/profile/Profile";
import QR from "./pages/qr/QR";
import Reward from "./pages/reward/Reward";
import RewardDetail from "./pages/reward_detail/RewardDetail";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import QRScanner from "./pages/qr/QRScanner";
import BlogDetail from "./pages/blog/BlogDetail";
import ServiceList from "./pages/service/ServiceList";
import ServiceDetail from "./pages/service/ServiceDetail";
import MyCoupon from "./pages/my-coupon/MyCoupon";
import PromotionDetail from "./pages/promotion/detail/PromotionDetail";
import PromotionList from "./pages/promotion/list/PromotionList";
import UseCoupon from "./pages/use-coupon/UseCoupon";

import MyAccount from "./pages/profile/my_account/MyAccount";
import TransactionHistory from "./pages/profile/transaction_history/TransactionHistory";
import MemberTireLevel from "./pages/profile/membership_tire_level/MemberTireLevel";
import ChangeNumber from "./pages/profile/change_number/ChangeNumber";
import ChangePassword from "./pages/profile/change_password/ChangePassword";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/my-account" element={<MyAccount />} />
      <Route path="/profile/change-number" element={<ChangeNumber />} />
      <Route path="/profile/change-password" element={<ChangePassword />} />
      <Route
        path="/profile/transaction-history"
        element={<TransactionHistory />}
      />
      <Route
        path="/profile/transaction-history"
        element={<TransactionHistory />}
      />
      <Route
        path="/profile/membership-tire-level"
        element={<MemberTireLevel />}
      />

      <Route path="/qr" element={<QR />} />
      <Route path="/scanner" element={<QRScanner />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/servicelist" element={<ServiceList />} />
      <Route path="/service/:id" element={<ServiceDetail />} />
      <Route path="/reward" element={<Reward />} />
      <Route path="/reward/:id" element={<RewardDetail />} />
      <Route path="/my-coupon" element={<MyCoupon />} />
      <Route path="/promotiondetail/:id" element={<PromotionDetail />} />
      <Route path="/promotionlist" element={<PromotionList />} />
      <Route path="/use-coupon" element={<UseCoupon />} />
    </Routes>
  );
};

export default Routers;
