import React from "react";
import BookCard from "../Cards/BookCard";
import Section from "../Section";

const HeroProductCards = ({ ebook, hardcover }: SingleProductObj) => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center max-w-[1200px] w-full mx-auto md:gap-10 lg:gap-0">
        <BookCard product={ebook} />
        <div className="col-span-1 w-full flex justify-start items-start flex-col ">
          <h2 className="text-4xl my-5">Lorem ipsum dolor sit amet</h2>
          <p className=" mb-5 max-w-[400px]">
            {`It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here',`}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center max-w-[1200px] w-full mx-auto md:mt-[-3rem] md:gap-10 lg:gap-0">
        <div className="col-span-1 w-full flex flex-col items-start md:items-end  order-2 md:order-1">
          <h2 className="text-4xl my-5 md:text-right">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="md:text-right mb-5 max-w-[400px]">
            {`It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here',`}
          </p>
        </div>
        <div className="order-1 md:order-2">
          <BookCard product={hardcover} />
        </div>
      </div>
    </Section>
  );
};

export default HeroProductCards;
