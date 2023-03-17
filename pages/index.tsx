import DynamicHead from "@/components/DynHead";
import HeroProductCards from "@/components/Layout/HeroProductCards";
import HeroSection from "@/components/Layout/HeroSection";
import productQuery from "@/lib/productQuery";
import { InferGetServerSidePropsType, NextPage } from "next";
import React from "react";

const Index: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ item_ebook, item_hardcover }) => {
  console.log(item_ebook, item_hardcover);
  return (
    <>
      <DynamicHead
        title="Magda Dimitrescu"
        description=""
        image="https://magdadimitrescu.com/assets/magda_dimitrescu_01.jpg"
      />
      <HeroSection />
      {item_ebook && item_hardcover && (
        <HeroProductCards ebook={item_ebook} hardcover={item_hardcover} />
      )}
    </>
  );
};

export default Index;

export const getServerSideProps = async () => {
  try {
    const [item_ebook, item_hardcover] = await productQuery();

    return {
      props: { item_ebook, item_hardcover },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      props: { item_ebook: null, item_hardcover: null },
    };
  }
};
