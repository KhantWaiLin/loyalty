import Home from "./pages/Home";
import Profile from "./pages/Profile";
import QR from "./pages/QR";
import Reward from "./pages/Reward";
import RewardDetail from "./pages/RewardDetail";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/qr",
    element: <QR />,
  },
  {
    path: "/reward",
    element: <Reward />,
  },
  {
    path: "/reward/:id",
    element: <RewardDetail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

export default routes;
