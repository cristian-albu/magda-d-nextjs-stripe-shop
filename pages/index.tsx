import DynamicHead from "@/components/DynHead";
import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import HeroProductCards from "@/components/Layout/HeroProductCards";
import HeroSection from "@/components/Layout/HeroSection";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { homePageData, homePageDataEn } from "@/data/siteData";
import productQuery from "@/lib/productQuery";
import { InferGetServerSidePropsType, NextPage } from "next";
import Image from "next/image";
import React, { useContext } from "react";

const Index: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
    item_ebook,
    item_hardcover,
    item_ebook_en,
    item_hardcover_en,
}) => {
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
                      <HeroProductCards ebook={item_ebook_en} hardcover={item_hardcover_en} langEn={langEn} />
                  )
                : item_ebook &&
                  item_hardcover && <HeroProductCards ebook={item_ebook} hardcover={item_hardcover} langEn={langEn} />}

            <Section bg="bg-gray-100">
                <Wrapper>
                    <div className="flex flex-wrap w-full justify-between items-start">
                        <div className="flex w-full justify-between items-center flex-wrap">
                            <Image
                                src={"/assets/magda_dimitrescu_04.jpg"}
                                width={1080}
                                height={1080}
                                alt="Magda Dimitrescu"
                                className="w-1/4 h-auto aspect-square object-cover rounded-full  mx-auto mb-10"
                            />
                            <h2 className="text-2xl md:text-5xl w-3/4 mb-10 pl-10">
                                {langEn ? "What my readers think:" : "Ce cred cititorii:"}
                            </h2>
                        </div>

                        {staticData.testimonials.map((item: { name: string; testimonial: string }, index: number) => (
                            <div
                                key={item.name}
                                className={`flex flex-col justify-start items-start p-5 bg-white shadow-lg rounded-lg mb-10 w-full  ${
                                    index === 0 || index === staticData.testimonials.length - 1 ? "md:w-[70%]" : "md:w-[28%]"
                                }`}
                            >
                                <p className="text-xl font-bold text-pink">{item.name}</p>
                                <p>{item.testimonial}</p>
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </Section>
        </>
    );
};

export default Index;

export const getServerSideProps = async () => {
    try {
        const [item_ebook, item_hardcover, item_ebook_en, item_hardcover_en] = await productQuery();

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
