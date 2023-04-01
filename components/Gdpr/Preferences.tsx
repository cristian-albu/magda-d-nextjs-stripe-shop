import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import { staticData } from "@/components/Gdpr/GdprData";
import React, { useContext } from "react";
import { Checkbox } from "../Checkbox";
import { AiOutlineCheckCircle, AiOutlineSave } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { useRouter } from "next/router";

const Preferences = () => {
  const {
    cookiePref,
    cookieAnalytics,
    cookieAds,
    handleRefuseAll,
    handleAcceptAll,
    setCookiePref,
    setCookieAnalytics,
    setCookieAds,
    openPrivacy,
    langEn,
    setLangEn,
    handleLang,
    handleSave,
  }: any = useContext(PrivacyContext);

  const router = useRouter();
  return (
    <div
      className={`bg-[#fff] p-8 rounded-md drop-shadow-xl w-[100%] flex flex-col overflow-auto h-full max-h-[80vh] items-start justify-between max-w-[1200px]`}
    >
      <p className="text-2xl lg:text-4xl">{staticData.preferences.title}</p>
      <p>{staticData.preferences.desc}</p>

      <div className="mb-5 flex flex-col">
        <span className="flex gap-1">
          {staticData.preferences.seeMore}{" "}
          <button className={`flex mb-5 text-pink`} onClick={openPrivacy}>
            {staticData.banner.btnPrivacy}
          </button>
        </span>
      </div>

      <div
        className="checkboxes flex flex-col gap-1"
        id="cookieCheckboxContainer"
      >
        <Checkbox
          text={staticData.preferences.essentialTitle}
          checked={true}
          disabled={true}
        />

        <p className="mb-5">{staticData.preferences.essentialDesc}</p>

        <Checkbox
          text={staticData.preferences.prefsTitle}
          checked={cookiePref}
          onChange={() => setCookiePref(!cookiePref)}
          disabled={router.asPath.includes("checkout")}
        />

        <p className="mb-5">{staticData.preferences.prefDesc}</p>

        <Checkbox
          text={staticData.preferences.analyticsTitle}
          checked={cookieAnalytics}
          onChange={() => setCookieAnalytics(!cookieAnalytics)}
          disabled={router.asPath.includes("checkout")}
        />

        <p className="mb-5">{staticData.preferences.analyticsDesc}</p>

        <Checkbox
          text={staticData.preferences.adsTitle}
          checked={cookieAds}
          onChange={() => setCookieAds(!cookieAds)}
        />

        <p className="mb-5">{staticData.preferences.adsDesc}</p>

        <Checkbox
          text={staticData.preferences.langTitle}
          checked={langEn}
          onChange={() => handleLang()}
        />

        <p className="mb-5">{staticData.preferences.langDesc}</p>
      </div>

      <div className={`flex flex-wrap justify-between items-center w-full`}>
        <div className={`flex flex-wrap justify-start gap-5 items-center`}>
          <button
            className={`flex items-center gap-2`}
            onClick={handleRefuseAll}
          >
            {<RxCrossCircled />} {staticData.banner.btnRefuse}
          </button>

          <button className={`btnPrimary`} onClick={handleAcceptAll}>
            {<AiOutlineCheckCircle />}
            {staticData.banner.btnAccetp}
          </button>
        </div>

        <button
          className={`flex items-center gap-2 bg-black shadow-md shadow-black/20 hover:shadow-lg hover:scale-[1.03] text-white rounded-md px-3 py-2 transition hover:bg-gray-800`}
          onClick={handleSave}
        >
          {<AiOutlineSave />}
          {staticData.preferences.save}
        </button>
      </div>
    </div>
  );
};

export default Preferences;
