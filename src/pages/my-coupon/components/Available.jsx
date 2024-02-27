function Available({setShowQr}) {
  
  return (
    <button onClick={() => setShowQr((prev) => !prev)} className="w-full h-[34px] border border-gray-100 rounded-md bg-neutral-50">
      <span className="text-center mx-[10px] my-[20px] text-indigo-700 text-xs font-medium leading-[18px]">
        Use Code
      </span>
    </button>
  );
}

export default Available;
