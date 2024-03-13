function PointList({ point, collectedType, isIn, date }) {
  return (
    <section className="h-[70px] py-2.5 rounded-tl-lg rounded-tr-lg border-b border-gray-100 justify-between items-start flex">
      <div className=" basis-2/12 flex justify-center items-center">
        <img
          src={isIn === true ? "img/coin.svg" : "/img/coin_used.svg"}
          alt="coin"
          className="w-[42px] h-[42px]"
        />
      </div>
      <div className=" basis-5/12 ms-[4px] flex flex-col justify-between items-start">
        <p className="text-gray-600 text-sm font-normal font-['Poppins'] leading-normal">
          {collectedType}
        </p>
        <p className="text-gray-400 text-xs font-normal font-['Poppins'] leading-[18px]">
          {date}
        </p>
      </div>
      <div className="basis-5/12 flex items-start justify-end">
        <p
          className={`text-sm font-normal font-['Poppins'] leading-tight ${
            isIn === true ? "text-emerald-500" : "text-red-500"
          }`}
        >
          {isIn? '+' : '-'} {point} Points
        </p>
      </div>
    </section>
  );
}

export default PointList;
