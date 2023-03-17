import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import { staticData } from "@/components/Gdpr/GdprData";
import React, { useContext } from "react";
import { AiOutlineCheckCircle, AiOutlineSetting } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

const Banner = () => {
  const { handleRefuseAll, handleAcceptAll, openPrefs, openPrivacy }: any =
    useContext(PrivacyContext);

  return (
    <div
      className={`absolute left-[10vw] bottom-0 bg-darkBlue text-[#fff] p-10 rounded-tl-[3rem]  rounded-tr-[3rem]  w-[80vw] flex flex-col drop-shadow-2xl`}
    >
      <p className="text-2xl ">🍪{staticData.banner.title}</p>
      <p>{staticData.banner.desc}</p>
      <div className="mb-5 flex flex-col">
        <span>
          {staticData.preferences.seeMore}{" "}
          <button
            className="cursor-pointer hover:text-pink transition-colors"
            onClick={openPrivacy}
          >
            {staticData.banner.btnPrivacy}
          </button>
        </span>
      </div>
      <div className={`flex flex-wrap justify-between items-center w-full`}>
        <button
          className={` bg-white flex items-center gap-2 text-black px-3 py-2 mr-auto`}
          onClick={openPrefs}
        >
          {<AiOutlineSetting />}
          {staticData.banner.btnPrefs}
        </button>

        <button
          className={` bg-white flex items-center gap-2 text-black px-3 py-2`}
          onClick={handleRefuseAll}
        >
          {<RxCrossCircled />}
          {staticData.banner.btnRefuse}
        </button>

        <button className={`btnPrimary`} onClick={handleAcceptAll}>
          {<AiOutlineCheckCircle />}
          {staticData.banner.btnAccetp}
        </button>
      </div>
    </div>
  );
};

export default Banner;
