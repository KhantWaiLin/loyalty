import React from "react";
import Footer from "../../../layouts/Footer";

function PromotionDetail() {

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
        <article className="flex items-center justify-center border border-yellow-300 basis-1/3">
          <h1>Image</h1>
        </article>
        <article className="flex flex-col mt-2 basis-2/3">
          <div className="basis-2/12">
            <h4>Promotion</h4>
            <h6>Date 1 Time</h6>
          </div>
          <div className="basis-10/12">
            <p className="px-3 py-2">
              Lorem ipsum dolor sit amet consectetur. Tellus neque vestibulum
              commodo non nibh quisque. Cursus tristique ac tellus in blandit
              vivamus quis. Pellentesque consequat urna hac est iaculis sit
              vitae ornare. Nisi et eu arcu malesuada viverra enim. Lorem ipsum
              dolor sit amet consectetur. Tellus neque vestibulum commodo non
              nibh quisque. Cursus tristique ac tellus in blandit vivamus quis.
              Pellentesque consequat urna hac est iaculis sit vitae ornare. Nisi
              et eu arcu malesuada viverra enim.
            </p>
          </div>
        </article>
      </section>
      <section className="basis-1/12">
        <Footer />
      </section>
    </main>
  );
}

export default PromotionDetail;
