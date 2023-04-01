import React from "react";

const Section = ({
  children,
  bg,
}: {
  children: React.ReactElement | React.ReactElement[];
  bg?: string;
}) => {
  return (
    <div
      className={` p-[2rem] md:p-[5rem] xl:p-[6rem] 2xl:p-[10rem] flex flex-col items-center justify-center  ${
        bg === "grey" ? "bg-grey" : "bg-transparent"
      }`}
    >
      {children}
    </div>
  );
};

export default Section;
