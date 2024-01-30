import React from "react";
import Footer from "../../../layouts/Footer";
import PromotionItem from "./components/PromotionItem";

function PromotionList({promotionList}) {
  return (
    <main className="flex flex-col h-full border-2">
      <section className="flex items-center justify-center basis-1/12">
        <h1>Promotion List</h1>
      </section>
      <section className="px-2 basis-1/12">
        <ul className="flex items-center justify-between w-1/2 h-full">
          <li className="cursor-pointer">Available</li>
          <li className="cursor-pointer">Used</li>
          <li className="cursor-pointer">Expired</li>
        </ul>
      </section>
      <section className="px-2 basis-9/12">
        <ul className="mt-1">
          <PromotionItem name="Redeem Product" />
          <PromotionItem name="Coupon Code" />
          <PromotionItem name="Redeem Product" />
          <PromotionItem name="Coupon Code" />
          <PromotionItem name="Coupon Code" />
        </ul>
      </section>
      <section className="basis-1/12">
        <Footer />
      </section>
    </main>
  );
}

export default PromotionList;
