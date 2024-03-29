import { Route, Routes } from "react-router-dom";

import Profile from "./pages/profile/Profile";
import QR from "./pages/qr/QR";
import Reward from "./pages/reward/Reward";
import RewardDetail from "./pages/reward_detail/RewardDetail";
import Home from "./pages/home/Home";
import Intro from "./pages/intro/Intro";
import Login from "./pages/login/Login";
import QRScanner from "./pages/qr/QRScanner";
import BlogList from "./pages/blog/BlogList";
import BlogDetail from "./pages/blog/BlogDetail";
import SavedBlogs from "./pages/blog/SavedBlogs";
import ServiceList from "./pages/service/ServiceList";
import ServiceDetail from "./pages/service/ServiceDetail";
import Register from "./pages/register/Register";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import ExpirePoints from "./pages/profile/membership_tire_level/ExpirePoints";
import Language from "./pages/profile/setting/Language";
import Setting from "./pages/profile/setting/Setting";
import MyCoupon from "./pages/my-coupon/MyCoupon";
import PromotionDetail from "./pages/promotion/detail/PromotionDetail";
import PromotionList from "./pages/promotion/list/PromotionList";
import UseCoupon from "./pages/use-coupon/UseCoupon";

import MyAccount from "./pages/profile/my_account/MyAccount";
import TransactionHistory from "./pages/profile/transaction_history/TransactionHistory";
import MemberTireLevel from "./pages/profile/membership_tire_level/MemberTireLevel";
import ChangeNumber from "./pages/profile/change_number/ChangeNumber";
import ChangePassword from "./pages/profile/change_password/ChangePassword";
import ViewTierBenefits from "./pages/profile/membership_tire_level/view_tier_benefits/ViewTierBenefits";
import NotiPage from "./pages/noti/NotiPage";
import HelpCenter from "./pages/profile/setting/HelpCenter";
import TermsConditions from "./pages/profile/setting/TermsConditions";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/login" element={<Login />} />
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
      <Route
        path="/profile/expire-point"
        element={<ExpirePoints />}
      />
      <Route
        path="/profile/membership-tire-level/view-tier-benefits"
        element={<ViewTierBenefits />}
      />
      <Route path="/notifications" element={<NotiPage />} />

      <Route path="/qr" element={<QR />} />
      <Route path="/scanner" element={<QRScanner />} />
      <Route path="/bloglist" element={<BlogList />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/blogsaved" element={<SavedBlogs />} />
      <Route path="/servicelist" element={<ServiceList />} />
      <Route path="/service/" element={<ServiceDetail />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgotpassword" element={<ForgotPassword/>} />
      <Route path="/reward" element={<Reward />} />
      <Route path="/reward/:id" element={<RewardDetail />} />
      <Route path="/my-coupon" element={<MyCoupon />} />
      <Route path="/promotiondetail/:id" element={<PromotionDetail />} />
      <Route path="/promotionlist" element={<PromotionList />} />
      <Route path="/profile/language" element={<Language/>} />
      <Route path="/profile/general" element={<Setting/>} />
      <Route path="/profile/help-center" element={<HelpCenter />} />
      <Route path="/profile/terms" element={<TermsConditions />} />
      <Route path="/use-coupon" element={<UseCoupon />} />
    </Routes>
  );
};

export default Routers;
