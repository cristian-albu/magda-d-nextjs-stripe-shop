import { homePageData, homePageDataEn } from "@/data/siteData";
import React from "react";
import BookCard from "../Cards/BookCard";
import Section from "../Section";

const HeroProductCards = ({ ebook, hardcover, langEn }: SingleProductObj) => {
  const data = langEn ? homePageDataEn : homePageData;
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center max-w-[1200px] w-full mx-auto md:gap-10 lg:gap-0">
        <BookCard product={ebook} />
        <div className="col-span-1 w-full flex justify-start items-start flex-col ">
          <h2 className="text-4xl my-5">
            {langEn ? "About the book" : "Despre carte"}
          </h2>
          <ul className="text-left flex flex-col justify-start items-center w-full">
            {data.features.map((item: { question: string; answer: string }) => (
              <li
                key={item.question}
                className="flex flex-col justify-start w-full"
              >
                <p className=" mb-2 max-w-[400px]">❔ {item.question}</p>
                <p className=" mb-5 max-w-[400px]">{item.answer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center max-w-[1200px] w-full mx-auto md:mt-[-3rem] md:gap-10 lg:gap-0">
        <div className="col-span-1 w-full flex flex-col items-start md:items-end  order-2 md:order-1">
          <h2 className="text-4xl my-5">
            {langEn ? "How can the book help you?" : "Cum te va ajuta cartea?"}
          </h2>
          <ul>
            {data.benefits.map((item: string) => (
              <li
                key={item}
                className="md:text-right mb-5 flex justify-start md:justify-end md:flex-row-reverse gap-3"
              >
                <p>🔆</p>
                <p className="md:ml-auto">{item} </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <BookCard product={hardcover} />
        </div>
      </div>
    </Section>
  );
};

export default HeroProductCards;
