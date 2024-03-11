import { LanguageContext } from "../../../LanguageContext";
import {useContext, useEffect} from "react";

function Available({setShowQr}) {
  const { t, changeLanguage } = useContext(LanguageContext);

  useEffect(() => {
    changeLanguage(localStorage.getItem("language"));
    // eslint-disable-next-line
  }, []);
  return (
    <button onClick={() => setShowQr((prev) => !prev)} className="w-full h-[34px] border border-gray-100 rounded-md bg-neutral-50">
      <span className="text-center mx-[10px] my-[20px] text-indigo-700 text-xs font-medium leading-[18px]">
        {t('usecode')}
      </span>
    </button>
  );
}

export default Available;
