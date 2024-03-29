import DynamicHead from "@/components/DynHead";
import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import HeroProductCards from "@/components/Layout/HeroProductCards";
import HeroSection from "@/components/Layout/HeroSection";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import { homePageData, homePageDataEn } from "@/data/siteData";
import productQuery from "@/lib/productQuery";
import reviewQuery from "@/lib/reviewQuery";
import { InferGetServerSidePropsType, NextPage } from "next";
import Image from "next/image";
import React, { useContext } from "react";

const ReviewCard = ({ item, langEn }: { item: Review; langEn: boolean }) => {
    return (
        <div
            key={item.name}
            className={`flex flex-col justify-start items-start p-5 bg-white 
            shadow-lg rounded-lg mb-10 w-full`}
        >
            <p className="text-xl font-bold text-pink">{item.name}</p>
            <p>{langEn ? item.review_en : item.review_ro}</p>
        </div>
    );
};

const Index: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
    item_ebook,
    item_hardcover,
    item_ebook_en,
    item_hardcover_en,
    reviews,
}) => {
    const { langEn }: any = useContext(PrivacyContext);
    const staticData = langEn ? homePageDataEn : homePageData;
    const reviewsColLeft = reviews?.filter((e: Review, i: number) => i < Math.round(reviews.length / 2));
    const reviewsColRight = reviews?.filter((e: Review, i: number) => i >= Math.round(reviews.length / 2));

    const [tblContents, setTblContents] = React.useState(false);

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

            {!langEn && (
                <Section>
                    <Wrapper>
                        <div className="w-full flex justify-between items-center pb-5 border-b-2 border-b-yellow border-dotted mb-5">
                            <h2 className="text-4xl">{"Cuprinsul cărții"}</h2>
                            <button className="btnPrimary2" onClick={() => setTblContents((tblContents) => !tblContents)}>
                                Vezi cuprinsul cărții
                            </button>
                        </div>
                        <div className="flex flex-col gap-5 relative">
                            <Image
                                src={"/assets/magdadimitrescu-cuprins-1.jpg"}
                                width={900}
                                height={900}
                                alt="Magda Dimitrescu"
                                className="w-full h-auto"
                            />
                            <Image
                                src={"/assets/magdadimitrescu-cuprins-2.jpg"}
                                width={900}
                                height={900}
                                alt="Magda Dimitrescu"
                                className={`${tblContents ? "w-full" : "w-0"} transition-all h-auto`}
                            />
                            <Image
                                src={"/assets/magdadimitrescu-cuprins-3.jpg"}
                                width={900}
                                height={900}
                                alt="Magda Dimitrescu"
                                className={`${tblContents ? "w-full" : "w-0"} transition-all h-auto`}
                            />

                            <div
                                className={`bg-gradient-to-t from-white to-transparent w-full h-full top-0 left-0 absolute transition-all ${
                                    tblContents ? "opacity-0" : "opacity-100"
                                }`}
                            />
                        </div>
                    </Wrapper>
                </Section>
            )}

            {reviewsColLeft && reviewsColRight && (
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

                            <div className="flex flex-wrap justify-between items-start">
                                <div className="flex flex-col w-full md:w-[48%]">
                                    {reviewsColLeft.map((item: Review) => (
                                        <ReviewCard item={item} langEn={langEn} key={item.name} />
                                    ))}
                                </div>
                                <div className="flex flex-col w-full md:w-[48%]">
                                    {reviewsColRight.map((item: Review) => (
                                        <ReviewCard item={item} langEn={langEn} key={item.name} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </Section>
            )}
        </>
    );
};

export default Index;

export const getServerSideProps = async () => {
    try {
        const [[item_ebook, item_hardcover, item_ebook_en, item_hardcover_en], reviews] = await Promise.all([
            productQuery(),
            reviewQuery(),
        ]);

        return {
            props: { item_ebook, item_hardcover, item_ebook_en, item_hardcover_en, reviews },
        };
    } catch (error) {
        console.error("Error fetching product data:", error);
        return {
            props: { item_ebook: null, item_hardcover: null, reviews: null },
        };
    }
};
