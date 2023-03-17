import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import { staticData } from "@/components/Gdpr/GdprData";
import React, { useContext } from "react";

const Privacy = () => {
  const { openPrefs }: any = useContext(PrivacyContext);
  return (
    <div
      className={`bg-[#fff] p-8 rounded-md drop-shadow-xl w-[100%] flex flex-col overflow-auto h-full max-h-[80vh] items-start max-w-[1200px]`}
    >
      <p className="text-2xl ">{staticData.banner.btnPrivacy}</p>

      <div className="mb-3">
        <div
          className={`cursor-pointer transition-colors text-darkPurple hover:text-pink`}
          onClick={openPrefs}
        >
          {staticData.banner.btnPrefs}
        </div>
      </div>

      <ul>
        {staticData.privacy.body.map((e: string, i: number) => (
          <li className={/\d/.test(e[0]) ? "text-xl mb-1" : "mb-5"} key={i}>
            {e}
          </li>
        ))}
      </ul>

      <button className={`btnPrimary`} onClick={openPrefs}>
        {staticData.banner.btnPrefs}
      </button>
    </div>
  );
};

export default Privacy;
