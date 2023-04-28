import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { termsDataEn, termsDataRo } from "@/data/siteData";
import React, { useContext } from "react";

const Terms = () => {
  const { langEn }: any = useContext(PrivacyContext);

  const data = langEn ? termsDataEn : termsDataRo;
  return (
    <Section>
      <Wrapper>
        <div className="max-w-[800px]">
          <div className="flex flex-col mb-10 ">
            <h2 className="text-2xl md:text-3xl mb-5">{data.returnTitle}</h2>
            <p>{data.returnPolicy}</p>
          </div>
          <div className="flex flex-col mb-10">
            <h2 className="text-2xl md:text-3xl mb-5">{data.shippingTitle}</h2>
            <p className="mb-5">{data.shippingPolicy}</p>

            <p className="mb-5">
              {langEn
                ? "The current shipping companies:"
                : "Firmele de curierat curente:"}
            </p>
            <div className="flex gap-5">
              {data.transportLinks.map(
                (item: { name: string; link: string }) => (
                  <a
                    href={item.link}
                    key={item.name}
                    className="text-purple font-bold"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
};

export default Terms;
