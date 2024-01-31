import React from "react";
<<<<<<< HEAD:src/pages/my-coupon/MyCouponList.jsx
import Footer from "../../layouts/Footer";
import CouponItem from "./components/CouponItem";
=======
import MyCouponList from "./components/MyCouponList";
>>>>>>> develop:src/pages/my-coupon/MyCoupon.jsx

function MyCouponList({couponList}) {
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
                <CouponItem name="Redeem Product"/>
                <CouponItem name="Coupon Code"/>
                <CouponItem name="Redeem Product"/>
                <CouponItem name="Coupon Code"/>
            </ul>
        </section>
        {/* <section className="basis-1/12">
            <Footer/>
        </section> */}
    </main>);
}

export default MyCouponList;