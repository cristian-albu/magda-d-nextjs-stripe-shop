import React, { useContext } from "react";

import { aboutPageData, aboutPageDataEn } from "@/data/siteData";
import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

const AboutMe = () => {
  const { langEn }: any = useContext(PrivacyContext);

  const pageDate = langEn ? aboutPageDataEn : aboutPageData;

  return (
    <Section>
      <Wrapper>
        <div className="flex flex-col max-w-[800px] mx-auto">
          <h1 className="text-2xl md:text-5xl mb-20">{pageDate.title}</h1>
          <div className="flex w-full justify-start items-center mb-10 flex-wrap">
            <Image
              src={"/assets/magda_dimitrescu_01.jpg"}
              width={300}
              height={300}
              alt="Magda Dimitrescu"
              className="w-[45%] h-auto mr-10 rounded-lg"
            />
            <div className="flex flex-col items-start justify-start w-full md:w-[45%]">
              <h2 className="text-2xl md:text-3xl mb-5 text-purple">
                {pageDate.title1}
              </h2>
              <p className="w-full ">{pageDate.paragraph1}</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl mb-5 text-purple">
            {pageDate.title2}
          </h2>
          <p className="w-full  mb-5">{pageDate.paragraph2}</p>

          <h2 className="text-2xl md:text-3xl mb-5 text-purple">
            {pageDate.title3}
          </h2>
          <p className="w-full  mb-5">{pageDate.paragraph3}</p>

          <h2 className="text-2xl md:text-3xl mb-5 text-purple">
            {pageDate.title4}
          </h2>
          <p className="w-full  mb-5">{pageDate.paragraph4}</p>

          <h2 className="text-2xl md:text-3xl mb-5 text-purple">
            {pageDate.title5}
          </h2>
          <p className="w-full  mb-5">{pageDate.paragraph5}</p>

          <h2 className="text-2xl md:text-3xl mb-5 text-purple">
            {pageDate.title6}
          </h2>
          <p className="w-full  mb-5">{pageDate.paragraph6}</p>

          <h2 className="text-2xl md:text-3xl mb-5 text-purple">
            {pageDate.title7}
          </h2>
          <p className="w-full  mb-5">{pageDate.paragraph7}</p>
        </div>
      </Wrapper>
    </Section>
  );
};

export default AboutMe;
