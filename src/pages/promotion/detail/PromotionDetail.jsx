import React from "react";
import Footer from "../../../layouts/Footer";
import PromotionDetailBody from "./components/PromotionDetailBody";

function PromotionDetail() {
  const promotionURL =
    "https://loyaltybim.azurewebsites.net/api/Admin/GetPromotionDetail";

  console.log(promotionURL);

  return (
    <main className="flex flex-col h-full ">
      <header className="py-3 basis-1/12">
        <section className="flex h-full">
          <article className="flex items-center justify-center basis-1/3">
            <button className="px-4 py-2 border-2 rounded-full">Back</button>
          </article>
          <article className="flex items-center basis-2/3 ps-2">
            <h1>Promotion Detail</h1>
          </article>
        </section>
      </header>
      <section className="flex flex-col basis-10/12">
        <PromotionDetailBody />
      </section>
      <section className="basis-1/12">
        <Footer />
      </section>
    </main>
  );
}

export default PromotionDetail;
