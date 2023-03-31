import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import { staticData } from "@/components/Gdpr/GdprData";
import React, { useContext } from "react";
import { AiOutlineCheckCircle, AiOutlineSetting } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { Checkbox } from "../Checkbox";

const Banner = () => {
  const {
    handleRefuseAll,
    handleAcceptAll,
    openPrefs,
    openPrivacy,
    handleLang,
    langEn,
  }: any = useContext(PrivacyContext);

  return (
    <div
      className={`absolute left-[10vw] bottom-0 bg-white text-purple p-10 rounded-tl-[3rem]  rounded-tr-[3rem]  w-[80vw] flex flex-col drop-shadow-2xl`}
    >
      <p className="text-2xl ">🍪{staticData.banner.title}</p>
      <p>{staticData.banner.desc}</p>
      <div className="mb-5 flex flex-col">
        <span>
          {staticData.preferences.seeMore}{" "}
          <button className="btnPrimary" onClick={openPrivacy}>
            {staticData.banner.btnPrivacy}
          </button>
        </span>
      </div>
      <div
        className={`flex flex-wrap justify-between items-center w-full gap-5`}
      >
        <button className={`btnPrimary mr-auto`} onClick={openPrefs}>
          {<AiOutlineSetting />}
          {staticData.banner.btnPrefs}
        </button>

        <Checkbox
          text={"English?"}
          checked={langEn}
          onChange={() => handleLang()}
        />

        <button className={`btnPrimary`} onClick={handleRefuseAll}>
          {<RxCrossCircled />}
          {staticData.banner.btnRefuse}
        </button>

        <button className={`btnPrimary2`} onClick={handleAcceptAll}>
          {<AiOutlineCheckCircle />}
          {staticData.banner.btnAccetp}
        </button>
      </div>
    </div>
  );
};

export default Banner;
