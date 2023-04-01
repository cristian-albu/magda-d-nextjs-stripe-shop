import {
  CheckoutCityInput,
  CheckoutEmailInput,
  CheckoutNameInput,
  CheckoutPostalCode,
  CheckoutShippingInput,
} from "@/components/CheckoutComponents";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import CartContext from "@/contexts/CartProvider";
import React, { useState, useContext, useCallback } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { styles } from "@/components/TextInput";
import { Checkbox } from "@/components/Checkbox";
import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import axios from "axios";
import { useRouter } from "next/router";
import { cardStyle } from "@/data/checkoutCardStyle";
import Image from "next/image";

const Checkout = () => {
  const router = useRouter();
  const { cart, totalPrice, dispatch, REDUCER_ACTIONS } =
    useContext(CartContext);
  const RemoveFromCart = useCallback(() => {
    dispatch({
      type: REDUCER_ACTIONS.REMOVE_ALL,
    });
  }, [dispatch]);
  const {
    openPrivacy,
    langEn,
    setCookiePref,
    setCookieAnalytics,
    handleSave,
  }: any = useContext(PrivacyContext);

  const [checkoutState, setCheckoutState] = useState({
    address: ``,
    email: ``,
    name: ``,
    city: ``,
    zip: ``,
  });

  const handleFormData = (target: EventTarget) => {
    if (
      target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement
    ) {
      if (target.name === "Name" || target.name === "Nume")
        setCheckoutState({ ...checkoutState, name: target.value });

      if (target.name === "Email")
        setCheckoutState({ ...checkoutState, email: target.value });

      if (target.name === "Address" || target.name === "Adresa")
        setCheckoutState({ ...checkoutState, address: target.value });
      if (target.name === "City" || target.name === "Oraş")
        setCheckoutState({ ...checkoutState, city: target.value });
      if (target.name === "Zip Code" || target.name === "Cod Poştal")
        setCheckoutState({ ...checkoutState, zip: target.value });
    }
  };

  const [checkboxState, setCheckboxState] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState({
    num: false,
    exp: false,
    cvc: false,
    err: "",
  });
  const elements = useElements();
  const stripe = useStripe();

  const cardHandleChange = (event: any) => {
    if (event.elementType === "cardNumber")
      setError({
        ...error,
        num: event.complete,
        err: event.error ? event.error.message : "",
      });

    if (event.elementType === "cardExpiry")
      setError({
        ...error,
        exp: event.complete,
        err: event.error ? event.error.message : "",
      });

    if (event.elementType === "cardCvc")
      setError({
        ...error,
        cvc: event.complete,
        err: event.error ? event.error.message : "",
      });
  };

  const handlePrivacy = () => {
    setCheckboxState((checkboxState) => !checkboxState);
    setCookiePref(true);
    setCookieAnalytics(true);
  };

  const finalValidation = () => {
    console.log(error);
    if (
      checkoutState.address.length <= 10 ||
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        checkoutState.address
      ) ||
      checkoutState.name.length < 1 ||
      !checkboxState ||
      checkoutState.city.length <= 2 ||
      checkoutState.zip.length !== 6 ||
      !error.cvc ||
      !error.exp ||
      !error.num
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handlePaymentIntent = async (e: any) => {
    e.preventDefault();
    handleSave();

    let res;

    try {
      res = await axios.post("/api/payment-intent", {
        payload: {
          cartItems: cart,
          shipping: {
            name: checkoutState.name,
            address: {
              line1: checkoutState.address,
              city: checkoutState.city,
              postal_code: checkoutState.zip,
            },
          },
          description: `Comanda: ${cart.map(
            (item: Product, index: number) =>
              `${item.title}: ${item.price} lei X ${item.quantity}${
                index < cart.length - 1 ? ", " : ""
              }`
          )}`,
          receipt_email: checkoutState.email,
        },
      });
    } catch (error) {
      console.log(error);
    }
    if (res && res.data.clientSecret && stripe && elements) {
      const clientSecret = res.data.clientSecret;

      setProcessing(true);

      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement)!,
        },
      });

      if (payload.error) {
        setError({ ...error, err: `Payment failed` });
      } else {
        router.push("/succes");
        RemoveFromCart();
      }
    }
  };

  return (
    <div className="relative w-full bg-gray-100 secondaryGradient mt-[-3rem]">
      <div className="w-full flex justify-center items-center flex-wrap py-[5rem] min-h-[100vh] px-10">
        <div className="md:mainGradient w-full md:w-[66%]" />
        <Wrapper>
          <div className="w-full flex justify-between flex-wrap items-center">
            <div className="w-full md:w-1/2 text-black md:text-white mb-5">
              <h1 className="mb-5 text-2xl md:text-4xl">
                {langEn ? "Products: " : "Produse:"}
              </h1>
              {cart.map((item: Product) => (
                <div key={item.id} className="flex gap-3 mb-5">
                  <Image
                    src={item.image}
                    width={50}
                    height={50}
                    alt=""
                    className="w-[50px]"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-bold">{item.title}</p>
                    <p>{item.summary}</p>
                    <div className="flex gap-3">
                      <p>
                        {langEn ? "Quantity: " : "Cantitate: "}
                        {item.quantity}
                      </p>
                      <p>
                        {langEn ? "Price: " : "Preţ: "}
                        {item.price} lei
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-lg font-bold pl-[62px]">Total: {totalPrice}</p>
            </div>
            <div className="w-full md:w-1/2">
              <form
                className=" p-[8px] shadow-black/40 shadow-2xl bg-gradient-to-tr from-pink to-yellow rounded-lg w-full max-w-[500px] mx-auto mb-[3rem]"
                onChange={({ target }) => handleFormData(target)}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="w-full h-full flex flex-col p-[1rem] md:p-[2rem] bg-white rounded-md  justify-start items-start">
                  <div className="w-full grid grid-cols-2 gap-x-5 mt-3">
                    <div className="col-span-2">
                      <CheckoutNameInput />
                    </div>
                    <div className="col-span-2">
                      <CheckoutEmailInput />
                    </div>

                    <div className="col-span-2">
                      <CheckoutShippingInput />{" "}
                    </div>

                    <CheckoutCityInput />
                    <CheckoutPostalCode />

                    <div className="col-span-2">
                      <p className={styles.inputLabelP}>
                        {langEn ? "Card number" : "Numărul cardului"}
                      </p>
                      <CardNumberElement
                        className={styles.inputText}
                        options={cardStyle}
                        onChange={cardHandleChange}
                      />
                    </div>
                    <div>
                      <p className={styles.inputLabelP}>
                        {langEn
                          ? "Card expiry date"
                          : "Data expirării cardului"}
                      </p>
                      <CardExpiryElement
                        className={styles.inputText}
                        options={cardStyle}
                        onChange={cardHandleChange}
                      />
                    </div>
                    <div>
                      <p className={styles.inputLabelP}>
                        {langEn ? "CVC Number" : "Codul CVC"}
                      </p>
                      <CardCvcElement
                        className={styles.inputText}
                        options={cardStyle}
                        onChange={cardHandleChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap item-center gap-1 mb-5">
                    <Checkbox
                      name="contactCheckBox"
                      text={langEn ? "I agree with the" : "Sunt de acord cu"}
                      checked={checkboxState}
                      onChange={handlePrivacy}
                    />

                    <button onClick={openPrivacy} className="text-purple">
                      {langEn
                        ? "Privacy policy*"
                        : "Politica de confidenţialitate*"}
                    </button>
                  </div>

                  {finalValidation() ? (
                    <button
                      className="btnPrimary2"
                      onClick={handlePaymentIntent}
                      disabled={processing}
                    >
                      {processing
                        ? "Processing"
                        : langEn
                        ? "Place order"
                        : "Plasează comanda"}
                    </button>
                  ) : (
                    <button className="btnPrimary2 " disabled>
                      {langEn ? "Place order" : "Plasează comanda"}
                    </button>
                  )}
                  {error.err.length > 1 && <p>{error.err}</p>}
                </div>
              </form>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Checkout;
