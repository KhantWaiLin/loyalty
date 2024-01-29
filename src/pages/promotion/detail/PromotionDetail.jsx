import React from "react";
import Footer from "../../../layouts/Footer";
import PromotionDetailBody from "./components/PromotionDetailBody";

function PromotionDetail() {
  return (
    <main className="flex border-2 border-green-700 h-full flex-col">
      <header className="basis-1/12 py-3">
        <section className="h-full flex">
          <article className="basis-1/3 flex justify-center items-center">
            <button className="border-2 rounded-full px-4 py-2">Back</button>
          </article>
          <article className="basis-2/3 flex ps-2 items-center">
            <h1>Promotion Detail</h1>
          </article>
        </section>
      </header>
      <section className="bg-red-400 basis-10/12 flex flex-col">
        <PromotionDetailBody />
      </section>
      <section className="basis-1/12">
        <Footer />
      </section>
    </main>
  );
}

export default PromotionDetail;
