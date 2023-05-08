import CartContext from "@/contexts/CartProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useCallback, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PrivacyContext } from "./Gdpr/PrivacyContext";

const Cart = () => {
  const { setOpenCart, openCart, dispatch, REDUCER_ACTIONS, cart, totalPrice } =
    useContext(CartContext);

  const { langEn }: any = useContext(PrivacyContext);

  const AddMore = useCallback(
    (product: Product) => {
      dispatch({
        type: REDUCER_ACTIONS.ADD_MORE,
        payload: { ...product, quantity: 1 },
      });
    },
    [dispatch, REDUCER_ACTIONS.ADD_MORE]
  );

  const RemoveFromCart = useCallback(
    (product: Product) => {
      dispatch({
        type: REDUCER_ACTIONS.REMOVE,
        payload: { ...product, quantity: 1 },
      });
    },
    [dispatch, REDUCER_ACTIONS.REMOVE]
  );

  const RemoveOneFromCart = useCallback(
    (product: Product) => {
      dispatch({
        type: REDUCER_ACTIONS.REMOVE_ONE,
        payload: { ...product, quantity: 1 },
      });
    },
    [dispatch, REDUCER_ACTIONS.REMOVE_ONE]
  );

  useEffect(() => {
    RemoveFromCart(
      cart[
        cart.findIndex(
          (item: Product) =>
            item.id === "sozc6w3vydixiwj" ||
            item.id === "nvpkiir4gkmyozd" ||
            item.id === "bkupshp1"
        )
      ]
    );
  }, [openCart]);

  return (
    <div
      className={`fixed right-0 top-0 w-full md:w-[50%] lg:w-[33%] h-full bg-gradient-to-t from-pink to-yellow shadow-2xl pl-2 shadow-black/40 z-[90] transition duration-200 origin-right ${
        openCart ? "scale-x-1" : "scale-x-0"
      }`}
    >
      <div
        className={`w-full h-full flex flex-col items-start py-10 bg-white justify-center transition duration-300 delay-200 relative ${
          openCart ? "opacity-[1] " : "opacity-[0] "
        }"`}
      >
        <p className="text-xl mt-[4rem] md:text-3xl mb-5 relative pl-10">
          {langEn ? "Your cart:" : "Coşul tău:"}
        </p>
        {cart.length > 0 ? (
          <div className="w-full relative overflow-y-auto overflow-x-visible pb-2 pl-10 flex flex-col justify-start items-start">
            {cart.map((item: Product) => (
              <div
                key={item.id}
                className="flex w-full border-b-2 border-b-gray-200 mb-3 pb-3 items-center"
              >
                <div className="w-[20%]">
                  <Image
                    src={item.image}
                    width={50}
                    height={50}
                    alt={item.title}
                  />
                </div>
                <div className="w-[80%] flex flex-col">
                  <p>{item.title}</p>
                  <p className="text-sm text-gray-500">
                    {item.summary.slice(0, 20)}
                    {item.summary.length < 20 && "..."}
                  </p>
                  <div className="flex gap-2 flex-wrap text-gray-500">
                    <p>{langEn ? "Price" : "Preţ"}</p>
                    <p className="text-pink">{item.price} lei</p>
                    <p>{langEn ? "Quantity" : "Cantitate:"}</p>
                    {!item.digital && (
                      <button onClick={() => RemoveOneFromCart(item)}>-</button>
                    )}
                    <p className="text-pink">{item.quantity}</p>
                    {!item.digital && (
                      <button onClick={() => AddMore(item)}>+</button>
                    )}
                    <button onClick={() => RemoveFromCart(item)}>
                      {langEn ? "Remove" : "Şterge"}
                    </button>
                  </div>
                  <div className="flex gap-2 text-gray-500">
                    <p>Subtotal:</p>
                    <p className="text-pink">
                      {item.price * item.quantity} lei
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <p className="text-xl md:text-3xl my-10">Total: {totalPrice}</p>
            {cart.length > 0 && (
              <Link
                className="btnPrimary2 z-[90]"
                href={"/checkout"}
                onClick={() => setOpenCart(false)}
              >
                {langEn ? "Go to checkout" : "Mergi la casă"}
              </Link>
            )}
          </div>
        ) : (
          <div className="pl-10">
            {langEn ? "Your cart is empty" : "Nu ai nimic în coş"}
          </div>
        )}

        <button
          onClick={() => setOpenCart(false)}
          className="btnPrimary mt-auto ml-10"
        >
          <AiOutlineClose />
          {langEn ? "Close" : "Închide"}
        </button>
      </div>
    </div>
  );
};

export default Cart;
