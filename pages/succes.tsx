import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import Link from "next/link";
import React, { useContext } from "react";

const Succes = () => {
  const { langEn }: any = useContext(PrivacyContext);
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-5">
      <p className="text-5xl ">✅</p>
      <p className="text-2xl md:text-4xl ">
        {langEn
          ? "Thank you for your order. "
          : "Îţi mulţumesc pentru comandă. "}
      </p>
      <p className="text-lg">
        {langEn
          ? "Verify your email for more details"
          : "Verifică mail-ul pentru mai multe detalii"}
      </p>
      <Link href="/" className="btnPrimary2">
        {langEn ? "Go to the main page" : "Mergi pe pagina principală"}
      </Link>
    </div>
  );
};

export default Succes;
