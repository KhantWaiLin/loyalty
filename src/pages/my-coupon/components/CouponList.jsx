function CouponList({ name }) {
  return (
    <div className=" w-full h-[100px] mb-[12px] bg-white rounded-[20px] flex gap-[8px] px-[12px] py-[10px] border border-gray-100 shadow-md">
      <section className="flex justify-center basis-1/4">
        <div class="w-20 h-20 py-4 bg-indigo-50 rounded-lg justify-center items-center inline-flex">
          <div class="w-20 h-12 mix-blend-darken ">Image</div>
        </div>
      </section>
      <section className="flex flex-col basis-2/4 justify-evenly">
        <p className="text-sm font-medium leading-normal text-gray-600">
          Redeem Gift
        </p>
        <div className="w-[66px] h-[26px] px-3 py-1 bg-amber-500 bg-opacity-10 rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
          <p className="text-amber-500 text-[10px] font-medium leading-[18px]">
            Pending
          </p>
        </div>
      </section>
      <section className="flex items-center h-full basis-1/4">
        <button className="w-full border border-gray-100 rounded-md bg-neutral-50">
          <span className="text-center mx-[12px] my-[20px] text-indigo-700 text-xs font-medium leading-[18px]">
            Use Code
          </span>
        </button>
      </section>
    </div>
  );
}

export default CouponList;

// return (
//     <li className="flex items-center justify-between px-3 py-2 mb-3 border-2 border-black rounded-md">
//         <span>{name}</span>
//         <span>
//             <button className="px-2 border-2 rounded-full">Use Code</button>
//         </span>
//     </li>
// );

{
  /* <button className="w-[82px] h-[34px] px-3 py-2 bg-neutral-50 rounded-lg border border-gray-100 justify-center items-center gap-2.5 inline-flex">
    <span className="mx-[12px] my-[8px] text-center text-indigo-700 text-xs font-medium leading-[18px]">Use Code</span>
</button> */
}
