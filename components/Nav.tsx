import Link from "next/link";
import React, { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import { BiMessageDetail, BiBookOpen } from "react-icons/bi";
import CartContext from "@/contexts/CartProvider";
import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import Image from "next/image";

const styles = {
  mainLi: `transition-all duration-150 ease hover:bg-yellow  flex items-center justify-center h-[3rem] md:h-auto`,
  link: `px-[1.5rem] w-full h-full flex gap-2 items-center justify-start md:justify-center relative cursor-pointer border-t-4 border-t-transparent`,
};

function Header({ route }: Router) {
  const { totalItems, totalPrice, setOpenCart, openCart } =
    useContext(CartContext);

  const { setLangEn, langEn, handleLang }: any = useContext(PrivacyContext);
  const [mobMenu, setMobMenu] = useState(false);

  const fullRoute = route.join("/");
  const headerData: Nav = [
    {
      title: langEn ? "Home" : "Acasă",
      link: "/",
      icon: <AiOutlineHome />,
    },
    {
      title: langEn ? "Shop" : "Magazin",
      link: "/magazin",
      icon: <AiOutlineShopping />,
    },
    {
      title: langEn ? "About me" : "Despre mine",
      link: "/despre-mine",
      icon: <AiOutlineUser />,
    },
    // {
    //   title: "Articole",
    //   link: "/articole",
    //   icon: <BiBookOpen />,
    // },
    {
      title: langEn ? "Contact" : "Contact",
      link: "/contact",
      icon: <BiMessageDetail />,
    },
    {
      title: langEn ? "Cart" : "Coş",
      link: "/cos",
      icon: <FiShoppingCart />,
    },
  ];

  const handleCart = () => {
    setMobMenu(false);
    setOpenCart((openCart) => !openCart);
  };

  return (
    <div className="fixed w-full top-0 left-0 bg-white text-black  flex h-[3rem] shadow-gray-200/20 shadow-lg z-[99]">
      <div
        className={`${
          mobMenu ? "scale-[1]" : "scale-[0] "
        }  fixed z-[97] top-[3rem] left-0 w-full h-[100vh] cursor-pointer backdrop-blur-sm bg-black/10`}
        onClick={() => setMobMenu(false)}
      />
      <ul className="flex justify-between w-full h-full relative z-[98]">
        <li className={`${styles.mainLi} mr-auto`}>
          <Link
            href={headerData[0].link}
            className={`${styles.link} border-b-4  ${
              fullRoute == headerData[0].link
                ? "border-purple"
                : "border-transparent"
            }`}
            onClick={() => setMobMenu(false)}
          >
            {headerData[0].title == "Cart" && (
              <div className="absolute top-[0.2rem] left-[2.2rem] text-xs border-[1px] border-black bg-white px-1 rounded-full text-black">
                {0}
              </div>
            )}
            <div className="text-xl">{headerData[0]?.icon}</div>

            {headerData[0].title}
          </Link>
        </li>
        <div
          className={`${
            mobMenu ? "scale-[1]" : "scale-[0]"
          } md:scale-[1] flex flex-col transition origin-top-right duration-300 ease-in-out delay-50 bg-white shadow-xl absolute right-0 top-[3rem] md:flex-row md:static md:shadow-none rounded-bl-lg md:rounded-none`}
        >
          {headerData.map(
            (item: NavItem, index: number) =>
              index > 0 &&
              index < headerData.length - 1 && (
                <li key={index} className={styles.mainLi}>
                  <Link
                    href={item.link}
                    className={`${styles.link} border-b-4  ${
                      fullRoute == item.link &&
                      item.title != "RO" &&
                      item.title != "EN"
                        ? "border-purple"
                        : "border-transparent"
                    }`}
                    onClick={() => setMobMenu(false)}
                  >
                    {item.title == "Coş" && (
                      <div className="absolute top-[0.2rem] left-[2.2rem] text-xs   bg-black px-1 rounded-full text-white">
                        {totalItems}
                      </div>
                    )}
                    <div className="text-xl">{item?.icon}</div>

                    {item.title}
                  </Link>
                </li>
              )
          )}
          <li>
            <button
              onClick={() => handleCart()}
              className={`${styles.link} border-b-4  hover:bg-yellow transition`}
            >
              <div className="absolute top-[0.2rem] left-[2.2rem] text-xs   bg-black px-1 rounded-full text-white">
                {totalItems}
              </div>
              <div className="text-xl">
                {headerData[headerData.length - 1]?.icon}
              </div>
              {headerData[headerData.length - 1].title}
            </button>
          </li>
        </div>
        <li className={`${styles.mainLi} md:hidden`}>
          <button
            className={styles.link}
            onClick={() => setMobMenu((mobMenu) => !mobMenu)}
          >
            <RxHamburgerMenu />
          </button>
        </li>
        <li>
          <button className={styles.link} onClick={() => handleLang()}>
            <Image
              src={langEn ? "/assets/ro.svg" : "/assets/en.svg"}
              width={15}
              height={15}
              alt=""
            />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
