import { Route, Routes } from "react-router-dom";

import Profile from "./pages/profile/Profile";
import QR from "./pages/QR";
import Reward from "./pages/reward/Reward";
import RewardDetail from "./pages/reward_detail/RewardDetail";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PersonalInformation from "./pages/profile/personal_information/PersonalInformation";
import TransactionHistory from "./pages/profile/transaction_history/TransactionHistory";
import MemberTireLevel from "./pages/profile/membership_tire_level/MemberTireLevel";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/profile/personal-information"
        element={<PersonalInformation />}
      />
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
      <Route path="/reward" element={<Reward />} />
      <Route path="/reward/:id" element={<RewardDetail />} />
    </Routes>
  );
};

export default Routers;
