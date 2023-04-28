import { contactPageData, footerData, footerDataEn } from "@/data/siteData";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { PrivacyContext } from "./Gdpr/PrivacyContext";
import Section from "./Section";
import Wrapper from "./Wrapper";

function Footer() {
  const { langEn, openPrefs, openPrivacy }: any = useContext(PrivacyContext);

  const headerData: Nav = [
    {
      title: langEn ? "Home" : "Acasă",
      link: "/",
      icon: <AiOutlineHome />,
    },
    // {
    //   title: langEn ? "Shop" : "Magazin",
    //   link: "/magazin",
    //   icon: <AiOutlineShopping />,
    // },
    {
      title: langEn ? "About me" : "Despre mine",
      link: "/despre-mine",
      icon: <AiOutlineUser />,
    },
    {
      title: langEn ? "Contact" : "Contact",
      link: "/contact",
      icon: <BiMessageDetail />,
    },
  ];

  const data = langEn ? footerDataEn : footerData;

  return (
    <Section bg="bg-[#09090b] text-white ">
      <Wrapper>
        <div className="grid gird-cols-1 md:grid-cols-3 w-full gap-3">
          <div className="flex flex-col justify-start gap-3">
            <p className="text-xl md:text-3xl my-5">
              {langEn ? "Contact data" : "Date de contact"}
            </p>
            <p>{contactPageData.companyData}</p>
            <p>
              {contactPageData.emailTitle}: {contactPageData.email}
            </p>
            {contactPageData.socialMedia.map(
              (item: {
                name: string;
                link: string;
                icon?: React.ReactElement;
              }) => (
                <a
                  key={item.link}
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex gap-3 items-center"
                >
                  {item.icon}
                  {item.name}
                </a>
              )
            )}
          </div>

          <div className="flex flex-col justify-start gap-3">
            <p className="text-xl md:text-3xl my-5">
              {langEn ? "Useful information" : "Informaţii utile"}
            </p>
            <button onClick={openPrefs} className="flex justify-start">
              ⚙️ {langEn ? "Preferences" : "Preferinţe"}
            </button>
            <button onClick={openPrivacy} className="flex justify-start">
              📃 {langEn ? "Privacy policy" : "Politica de confidenţialitate"}
            </button>
            <Link href={"/termeni-si-conditii"}>
              🚚{" "}
              {langEn
                ? "Terms, returns, and shipping"
                : "Termeni, retur şi transport"}
            </Link>
            <a href={data.anpc.link} rel="noopener noreferrer" target="_blank">
              {data.anpc.title}
            </a>
            <a href={data.anpc1.link} rel="noopener noreferrer" target="_blank">
              {data.anpc1.title}
            </a>
            <a href={data.anpc2.link} rel="noopener noreferrer" target="_blank">
              {data.anpc2.title}
            </a>
          </div>
          <div className="flex flex-col justify-start gap-3">
            <p className="text-xl md:text-3xl my-5">
              {langEn ? "Quick links" : "Navigare"}
            </p>
            {headerData.map((item: NavItem) => (
              <Link
                href={item.link}
                key={item.title}
                className="flex items-center gap-3"
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
            <div className="flex flex-col mt-10">
              <a
                href={data.stripe.link}
                rel="noopener noreferrer"
                target="_blank"
                className="flex gap-3 items-center"
              >
                <Image
                  src={data.stripe.logo}
                  width={100}
                  height={100}
                  alt="Stripe logo"
                  className="w-[100px] h-auto object-contain"
                />
                {data.stripe.title}
              </a>
            </div>
          </div>
        </div>
      </Wrapper>

      <div className="mb-[5rem]"></div>
      <a
        href="https://www.koddezign.com"
        className="mx-auto gap-3 my-10 flex justify-center items-center"
      >
        <div className="w-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 331.71 245"
            fill="#FFFFFF"
          >
            <defs>
              <style></style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="title">
                <path
                  className="cls-1"
                  d="M313.51,190.49a98.34,98.34,0,0,1-138.92,0L105.12,121l95.3-95.29h29V0H150.57V25.74H164L68.73,121l87.66,87.66a124,124,0,0,0,175.32,0Z"
                />
                <polygon
                  className="cls-1"
                  points="52.29 25.74 78.85 25.74 78.85 0 0 0 0 25.74 26.55 25.74 26.55 213.87 0 213.87 0 239.6 78.85 239.6 78.85 213.87 52.29 213.87 52.29 25.74"
                />
                <path
                  className="cls-1"
                  d="M186.36,121a57.69,57.69,0,1,0,57.69-57.69A57.76,57.76,0,0,0,186.36,121Zm57.69-31.95a32,32,0,1,1-32,32A32,32,0,0,1,244.05,89.08Z"
                />
              </g>
            </g>
          </svg>
        </div>
        {langEn ? "Made by Koddezign" : "Creat de Koddezign"}
      </a>
    </Section>
  );
}

export default Footer;
