import { Route, Routes } from "react-router-dom";

import Profile from "./pages/Profile";
import QR from "./pages/QR";
import Reward from "./pages/reward/Reward";
import RewardDetail from "./pages/RewardDetail";
import Home from "./pages/home/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/qr" element={<QR />} />
      <Route path="/reward" element={<Reward />} />
      <Route path="/reward/:id" element={<RewardDetail />} />
    </Routes>
  );
};

export default Routers;
