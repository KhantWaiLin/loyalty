function PointList({ index, point, collectedType, isIn, date }) {
  return (
    <div key={index} className="h-[65px] border-b-2 px-4 mb-1 z-10">
      <section className="flex h-full py-1 gap-x-1">
        <article className=" basis-1/4">
          <div className="bg-yellow-400 rounded-full w-14 h-14"></div>
        </article>
        <article className="flex flex-col justify-between pb-1 basis-2/4">
          <div className="text-base font-medium leading-normal text-gray-600">
            {collectedType}
          </div>
          <div className="text-gray-400 text-[13px] font-normal  leading-tight">
            {date}
          </div>
        </article>
        <article
          className={`text-sm font-medium leading-normal  basis-1/4 ${
            isIn === true ? "text-green-500" : "text-red-500"
          }`}
        >
          + {point} Points
        </article>
      </section>
    </div>
  );
}

export default PointList;
