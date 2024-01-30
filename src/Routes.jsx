import { Route, Routes } from "react-router-dom";

import Profile from "./pages/Profile";
import QR from "./pages/qr/QR";
import Reward from "./pages/reward/Reward";
import RewardDetail from "./pages/reward_detail/RewardDetail";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import QRScanner from "./pages/qr/QRScanner";
import BlogDetail from "./pages/blog/BlogDetail";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/qr" element={<QR />} />
      <Route path="/scanner" element={<QRScanner/>} />
      <Route path="/blog/:id" element={<BlogDetail/>} />
      <Route path="/reward" element={<Reward />} />
      <Route path="/reward/:id" element={<RewardDetail />} />
    </Routes>
  );
};

export default Routers;
