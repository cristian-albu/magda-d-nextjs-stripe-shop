import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const styles = {
  floatingIcons: `bg-[#97528E] w-[3rem] aspect-square absolute z-[10] rounded-full bg-no-repeat bg-center`,
};

const HeroSection: any = () => {
  return (
    <div className="relative min-h-[90vh] w-full text-white flex justify-items-center  items-center rounded-b-[2rem] overflow-hidden p-[2rem] md:p-[5rem] xl:p-[8rem] 2xl:p-[12rem]">
      <div className="mainGradient" />
      <div className="grid grid-cols-1 md:grid-cols-2 relative w-full justify-center items-center max-w-[1200px] mx-auto">
        <div className="relative flex flex-col  items-start w-full max-w-[80%] order-2 md:order-1 mt-10 md:mt-0">
          <h1 className="text-5xl font-bold">Aurora Love</h1>
          <p className="my-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
          </p>
          <Link href={"/magazin"} className="btnPrimary">
            <AiOutlineShopping />
            Shop Now
          </Link>
        </div>

        <div className="relative flex justify-center items-center order-1 md:order-2">
          <div className="relative bg-gradient-to-l from-[#fed383] to-transparent w-[60%] xl:w-[80%] 2xl:w-[90%] aspect-square rounded-[20%] rotate-45 flex justify-center items-center">
            <div className="relative w-[75%] aspect-square rounded-full bg-black rotate-[-45deg] flex justify-center items-center shadow-[#97528E]/50 shadow-2xl">
              <Image
                src={"/assets/magda_dimitrescu_01.jpg"}
                width={500}
                height={500}
                alt=""
                className="w-full aspect-square rounded-full object-cover"
              />
              <div
                className={`${styles.floatingIcons} top-[8%] left-[6%] bg-[url('/assets/cross.svg')]  bg-[length:40%]`}
              />
              <div
                className={`${styles.floatingIcons} bottom-[0%] left-[20%] bg-[url('/assets/swirl.svg')]  bg-[length:60%]`}
              />
              <div
                className={`${styles.floatingIcons} top-[50%] right-[-1.5rem] mt-[-1.5rem] bg-[url('/assets/centerdot.svg')]  bg-[length:50%]`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
