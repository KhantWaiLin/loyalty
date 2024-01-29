import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import QR from "./pages/QR";
import Reward from "./pages/Reward";
import RewardDetail from "./pages/RewardDetail";
import PromotionDetail from "./pages/promotion/detail/PromotionDetail";
import PromotionList from "./pages/promotion/list/PromotionLIst";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/promotion-detail" element={<PromotionDetail />} />
      <Route path="/promotion-list" element={<PromotionList />} />
    </Routes>
  );
};

export default Routers;
