import React from "react";
import Footer from "../../../layouts/Footer";
import PromotionDataLi from "./components/PromotionDataLi";

function PromotionList() {
  return (
    <main className="flex flex-col h-full border-2">
      <section className="flex items-center justify-center basis-1/12">
        <h1>My Coupon</h1>
      </section>
      <section className="px-2 basis-1/12">
        <ul className="flex items-center justify-between w-1/2 h-full">
          <li>Available</li>
          <li>Used</li>
          <li>Expired</li>
        </ul>
      </section>
      <section className="px-2 basis-9/12">
        <ul className="mt-1">
          <PromotionDataLi name="Redeem Product" />
          <PromotionDataLi name="Coupon Code" />
          <PromotionDataLi name="Redeem Product" />
          <PromotionDataLi name="Coupon Code" />
          <PromotionDataLi name="Coupon Code" />
        </ul>
      </section>
      <section className="basis-1/12">
        <Footer />
      </section>
    </main>
  );
}

export default PromotionList;
