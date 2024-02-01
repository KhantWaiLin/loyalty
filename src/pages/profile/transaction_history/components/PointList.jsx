function PointList() {
    return (
        <div className="h-[65px] border-b-2 px-4 mb-1 z-10">
            <section className="flex h-full py-1 gap-x-1">
                <article className=" basis-1/4">
                    <div className="bg-yellow-400 rounded-full w-14 h-14">

                    </div>
                </article>
                <article className="flex flex-col justify-between pb-1 basis-2/4">
                    <div className="text-base font-medium leading-normal text-gray-600">
                        Point Added
                    </div>
                    <div className="text-gray-400 text-[13px] font-normal  leading-tight">
                        September 7, 2023
                    </div>
                </article>
                <article className="text-base font-medium leading-normal text-green-500 basis-1/4">
                    + 200 Points
                </article>
            </section>
        </div>
    );
}

export default PointList;


{/* <div
    className="w-full h-[80px] flex gap-[8px] bg-green-400 border-b-2"
  >
    <section className="flex justify-center basis-1/4 bg-yello">
      <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-indigo-50">
        <div className="h-10 w-18 mix-blend-darken">
          1
        </div>
      </div>
    </section>
    <section className="flex flex-col basis-2/4 justify-evenly">
      <p className="text-sm font-medium leading-normal text-gray-600">
        name
      </p>
      <div className=" text-gray-400 text-[10px] font-normal  leading-tight">
      date
    </div>
    </section>
    <section className="flex items-center h-full basis-1/4">
      point
    </section>
  </div> */}