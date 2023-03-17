import React, { useContext } from "react";

import {
  AiOutlineCheckCircle,
  AiOutlineSave,
  AiOutlineSetting,
} from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import { staticData } from "@/components/Gdpr/GdprData";
import { Checkbox } from "../Checkbox";
import Banner from "./Banner";
import Privacy from "./Privacy";
import Preferences from "./Preferences";

export default function Gdpr() {
  const {
    showPrivacy,
    showPreferences,
    showBanner,
    openPrefs,
    handleClose,
  }: any = useContext(PrivacyContext);

  return (
    <div
      className={
        showPreferences || showPrivacy
          ? `fixed bottom-0 left-0  flex flex-col justify-center items-center w-[100vw] h-[100vh] p-[2rem] md:p-[4rem] 2xl:p-[5rem]`
          : `fixed bottom-0 left-0  flex flex-col justify-center items-center`
      }
      style={{ zIndex: "98" }}
    >
      <div
        className={`absolute bottom-[1.5rem] left-[1.5rem] text-2xl bg-[#fff] p-1 drop-shadow-xl rounded-full cursor-pointer flex items-end`}
        aria-describedby={"Preferinţe şi politica de confidenţialitate"}
        onClick={openPrefs}
        id="prefsHover"
      >
        🍪
        <div
          className={`absolute bg-[#fff] text-dark rounded-md drop-shadow-xl p-3 bottom-[2rem] left-[20%]  text-lg`}
        >
          {staticData.banner.btnPrefs}
        </div>
      </div>
      {showPreferences || showPrivacy ? (
        <div
          className={`absolute w-[100%] h-[100%] transition bg-[#00000021] backdrop-blur-sm flex justify-end items-start pt-[5rem] pr-[3rem] cursor-pointer`}
          onClick={handleClose}
        />
      ) : (
        <></>
      )}
      {showBanner ? <Banner /> : <></>}
      {showPreferences ? <Preferences /> : <></>}
      {showPrivacy ? <Privacy /> : <></>}

      <style jsx>{`
        #prefsHover > div {
          transition: transform 0.2s;
          transform-origin: bottom left;
          transform: scale(0);
        }

        #prefsHover:hover > div {
          transform: scale(1);
        }
        #cookieCheckboxContainer {
          padding-bottom: 1rem;
          margin-top: -1rem;
        }
        #cookieCheckboxContainer > label {
          display: flex;
          gap: 0.25rem;
          cursor: pointer;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}
