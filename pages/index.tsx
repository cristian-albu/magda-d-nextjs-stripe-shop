import DynamicHead from "@/components/DynHead";
import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import HeroProductCards from "@/components/Layout/HeroProductCards";
import HeroSection from "@/components/Layout/HeroSection";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { homePageData, homePageDataEn } from "@/data/siteData";
import productQuery from "@/lib/productQuery";
import { InferGetServerSidePropsType, NextPage } from "next";
import React, { useContext } from "react";

const Index: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ item_ebook, item_hardcover, item_ebook_en, item_hardcover_en }) => {
  const { langEn }: any = useContext(PrivacyContext);

  const staticData = langEn ? homePageDataEn : homePageData;

  return (
    <>
      <DynamicHead
        title="Magda Dimitrescu"
        description=""
        image="https://magdadimitrescu.com/assets/magda_dimitrescu_01.jpg"
      />
      <HeroSection data={staticData} />

      {langEn
        ? item_ebook_en &&
          item_hardcover_en && (
            <HeroProductCards
              ebook={item_ebook_en}
              hardcover={item_hardcover_en}
              langEn={langEn}
            />
          )
        : item_ebook &&
          item_hardcover && (
            <HeroProductCards
              ebook={item_ebook}
              hardcover={item_hardcover}
              langEn={langEn}
            />
          )}

      <Section bg="bg-gray-100">
        <Wrapper>
          <div className="flex flex-wrap w-full justify-between items-start">
            <h2 className="text-xl md:text-3xl w-full mb-10 text-center">
              {langEn ? "What my readers think:" : "Ce cred cititorii:"}
            </h2>
            {staticData.testimonials.map(
              (item: { name: string; testimonial: string }, index: number) => (
                <div
                  key={item.name}
                  className={`flex flex-col justify-start items-start p-5 bg-white shadow-lg rounded-lg mb-10 w-full  ${
                    index === 0 || index === staticData.testimonials.length - 1
                      ? "md:w-[70%]"
                      : "md:w-[28%]"
                  }`}
                >
                  <p className="text-xl font-bold text-pink">{item.name}</p>
                  <p>{item.testimonial}</p>
                </div>
              )
            )}
          </div>
        </Wrapper>
      </Section>
    </>
  );
};

export default Index;

export const getServerSideProps = async () => {
  try {
    const [item_ebook, item_hardcover, item_ebook_en, item_hardcover_en] =
      await productQuery();

    return {
      props: { item_ebook, item_hardcover, item_ebook_en, item_hardcover_en },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      props: { item_ebook: null, item_hardcover: null },
    };
  }
};
