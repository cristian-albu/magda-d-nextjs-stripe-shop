import Image from "next/image";
import React, { useContext, useEffect, useState, useCallback } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import CartContext from "@/contexts/CartProvider";

const BookCard = ({ product }: SingleProductObj) => {
  const { dispatch, REDUCER_ACTIONS, cart } = useContext(CartContext);

  const [clickAddToCart, setClickAddToCart] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (
        localStorage.getItem("state") != null ||
        localStorage.getItem("state") != undefined
      ) {
        const localCart: any = localStorage.getItem("state");
        const { cart } = JSON.parse(localCart);

        const itemExists: Product | undefined = cart.find(
          (item: Product) => item.id == product.id
        );

        setClickAddToCart(itemExists ? true : false);
      }
    }
    console.log("render");
  }, [cart]);

  const onAddToCart = useCallback(
    () =>
      dispatch({
        type: REDUCER_ACTIONS.ADD,
        payload: { ...product, quantity: 1 },
      }),
    [dispatch, REDUCER_ACTIONS.ADD, product]
  );

  const handleClick = useCallback(() => {
    if (!clickAddToCart) {
      onAddToCart();
    }

    setClickAddToCart(true);
  }, [clickAddToCart, onAddToCart]);

  return (
    <div className="bg-gradient-to-tr from-pink to-yellow shadow-pink/20 shadow-2xl rounded-3xl overflow-hidden p-2 w-full md:max-w-[350px] hover:shadow-yellow/50 transition duration-300 relative">
      <div className=" flex justify-center items-center bg-white flex-col rounded-2xl">
        <div className="w-full h-[15rem] bg-gradient-to-tr from-pink/20 to-yellow/40 rounded-2xl shadow-purple/10 shadow-lg flex justify-center items-center">
          <Image
            src={product.image}
            width={300}
            height={300}
            alt={product.title}
            className="w-full h-[80%] object-contain  "
          />
        </div>

        <div className="p-5">
          <h3 className="text-2xl font-bold">{product.title} </h3>
          <p className="text-pink italic">
            {product.digital ? "E-book" : "Hardcover"}
          </p>
          <p>{product.summary}</p>
          <div className="flex items-center justify-between mt-5">
            <p className="text-2xl font-bold">{product.price} Lei</p>
            <button
              className={`btnPrimary2 ${
                clickAddToCart
                  ? "bg-grey hover:scale-[1] hover:bg-grey text-black cursor-not-allowed"
                  : ""
              }`}
              disabled={clickAddToCart}
              onClick={() => handleClick()}
            >
              <AiOutlineShopping />
              {clickAddToCart ? "Produs în coş" : "Adaugă în coş"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
