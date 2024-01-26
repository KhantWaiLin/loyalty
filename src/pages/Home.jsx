import React from "react";
import Noti from "../components/Noti";
import PointTotal from "../components/PointTotal";
import Cupon from "../components/Cupon";

const Home = () => {
  return (
    <div className="text-black-500 text-lg px-4 w-full h-full">
      <div className="flex justify-end  py-4">
        <Noti />
      </div>
      <div className="flex  gap-4">
        <div className="w-[305px] h-[80px]">
          <PointTotal />
        </div>
        <div className="w-[100px] h-[80px]">
          <Cupon />
        </div>
      </div>
    </div>
  );
};

export default Home;
