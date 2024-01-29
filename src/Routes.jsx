import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import QR from "./pages/QR";
import QRScanner from './pages/QRScanner';
import BlogDetail from "./pages/BlogDetail";
import Reward from "./pages/Reward";
import RewardDetail from "./pages/RewardDetail";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/qr" element={<QR />} />
      <Route path="/scanner" element={<QRScanner />} />
      <Route path="/blogdetail" element={<BlogDetail/>} />
    </Routes>
  );
};

export default Routers;
