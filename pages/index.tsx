import DynamicHead from "@/components/DynHead";
import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import HeroProductCards from "@/components/Layout/HeroProductCards";
import HeroSection from "@/components/Layout/HeroSection";
import productQuery from "@/lib/productQuery";
import { InferGetServerSidePropsType, NextPage } from "next";
import React, { useContext } from "react";

const Index: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ item_ebook, item_hardcover, item_ebook_en, item_hardcover_en }) => {
  const { langEn }: any = useContext(PrivacyContext);
  return (
    <>
      <DynamicHead
        title="Magda Dimitrescu"
        description=""
        image="https://magdadimitrescu.com/assets/magda_dimitrescu_01.jpg"
      />
      <HeroSection langEn={langEn} />

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
