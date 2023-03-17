import React, {
  Dispatch,
  SetStateAction,
  useState,
  createContext,
  ReactElement,
  useEffect,
} from "react";

import { setCookie, getCookie, hasCookie } from "cookies-next";

export type PrivacyProps = {
  showPrivacy: boolean;
  setShowPrivacy: Dispatch<SetStateAction<boolean>>;
};

export const PrivacyContext: any = createContext([]);

export default ({ children }: ChildrenType): ReactElement => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [cookiePref, setCookiePref] = useState(false);
  const [cookieAnalytics, setCookieAnalytics] = useState(false);
  const [cookieAds, setCookieAds] = useState(false);

  const handleClose = () => {
    setShowBanner(false);
    setShowPreferences(false);
    setShowPrivacy(false);
  };

  const openPrefs = () => {
    setShowBanner(false);
    setShowPreferences(true);
    setShowPrivacy(false);
  };

  const openPrivacy = () => {
    setShowBanner(false);
    setShowPreferences(false);
    setShowPrivacy(true);
  };

  const handleAcceptAll = () => {
    setCookiePref(true);
    setCookieAnalytics(true);
    setCookieAds(true);
    setCookie("mdAuroraLoveConsentChoice", "acceptAll", { maxAge: 120960000 });
    handleClose();
  };

  const handleRefuseAll = () => {
    document.cookie.split(";").forEach(function (c) {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    setCookiePref(false);
    setCookieAnalytics(false);
    setCookieAds(false);
    setCookie("mdAuroraLoveConsentChoice", "essential", { maxAge: 120960000 });
    handleClose();
  };

  const handleSave = () => {
    let val: Array<string> = [];

    if (cookiePref) val.push("pref");
    if (cookieAnalytics) val.push("analytics");
    if (cookieAds) val.push("ads");
    const data = val.length
      ? val.length > 2
        ? "acceptAll"
        : val.join(".")
      : "essential";

    setCookie("mdAuroraLoveConsentChoice", data, { maxAge: 120960000 });

    handleClose();
  };

  useEffect(() => {
    if (hasCookie("mdAuroraLoveConsentChoice")) {
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    let val = [""];
    const cookieData = getCookie("mdAuroraLoveConsentChoice");

    if (typeof cookieData == "string") val = cookieData.split(".");

    if (val.includes("pref")) setCookiePref(true);
    if (val.includes("analytics")) setCookieAnalytics(true);
    if (val.includes("ads")) setCookieAds(true);
    if (val.includes("acceptAll")) {
      setCookiePref(true);
      setCookieAnalytics(true);
      setCookieAds(true);
    }
  }, []);

  const PrivacyData = {
    showPrivacy,
    setShowPrivacy,
    showPreferences,
    showBanner,
    cookiePref,
    cookieAnalytics,
    cookieAds,
    handleRefuseAll,
    handleAcceptAll,
    setCookiePref,
    setCookieAnalytics,
    setCookieAds,
    openPrefs,
    openPrivacy,
    handleClose,
    handleSave,
  };

  return (
    <PrivacyContext.Provider value={PrivacyData}>
      {children}
    </PrivacyContext.Provider>
  );
};
