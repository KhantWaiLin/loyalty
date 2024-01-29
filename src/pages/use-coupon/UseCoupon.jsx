import React from "react";

function UseCoupon() {
  return (
    <main className="flex items-center justify-center h-full">
      <section className="p-1 border-2 border-black rounded-lg size-80">
        <form className="flex flex-col w-full px-4 ">
          <div className="flex items-center basis-1/4">
            <h1>Modal</h1>
          </div>
          <div className="flex items-center basis-1/4">
            <p>Her kommer det tekst eller kanskje et spørsmål i modal?</p>
          </div>
          <div className="flex items-center basis-1/4">
            <input
              type="text"
              placeholder="Use Code"
              className="w-full py-3 border-2 border-black rounded-full ps-5"
            />
          </div>
          <div className="flex basis-1/4">
            <div className="flex items-center justify-start basis-1/2">
              <button className="p-2 border-2 border-black rounded-lg">
                Button
              </button>
            </div>
            <div className="flex items-center justify-end basis-1/2">
              <button className="p-2 border-2 border-black rounded-lg">
                Button
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

export default UseCoupon;
