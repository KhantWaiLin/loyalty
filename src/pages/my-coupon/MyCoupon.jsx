import React from "react";
import MyCouponList from "./components/MyCouponList";

function MyCoupon() {
    return (<main className="flex flex-col h-full border-2">
        <section className="flex items-center justify-center basis-1/12">
            <h1>My Coupon</h1>
        </section>
        <section className="px-2 basis-1/12">
            <ul className="flex items-center justify-between w-1/2 h-full">
                <li>
                    <button>Available</button>
                </li>
                <li>
                    <button>Used</button>
                </li>
                <li>
                    <button>Expired</button>
                </li>
            </ul>
        </section>
        <section className="px-2 basis-9/12">
            <ul className="mt-1">
                <MyCouponList name="Redeem Product"/>
                <MyCouponList name="Coupon Code"/>
                <MyCouponList name="Redeem Product"/>
                <MyCouponList name="Coupon Code"/>
            </ul>
        </section>
        {/* <section className="basis-1/12">
            <Footer/>
        </section> */}
    </main>);
}

export default MyCoupon;