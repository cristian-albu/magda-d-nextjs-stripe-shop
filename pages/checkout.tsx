import {
  CheckoutEmailInput,
  CheckoutNameInput,
  CheckoutShippingInput,
} from "@/components/CheckoutComponents";
import Section from "@/components/Section";
import Wrapper from "@/components/Wrapper";
import CartContext from "@/contexts/CartProvider";
import React, { useState, useContext } from "react";
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
const cardStyle = {
  style: {
    base: {
      color: "#000",
      fontFamily: "Roboto, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#606060",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};
const Checkout = () => {
  const router = useRouter();
  const { cart, totalPrice } = useContext(CartContext);
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
  });

  const finalValidation = () => {
    if (
      checkoutState.address.length >= 10 &&
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        checkoutState.address
      ) &&
      checkoutState.name.length > 1 &&
      checkboxState
    ) {
      return true;
    } else {
      return false;
    }
  };

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
    }
  };

  const [checkboxState, setCheckboxState] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const elements = useElements();
  const stripe = useStripe();

  const cardHandleChange = (event: any) => {
    const { error } = event;
    setError(error ? error.message : "");
  };

  const handlePrivacy = () => {
    setCheckboxState((checkboxState) => !checkboxState);
    setCookiePref(true);
    setCookieAnalytics(true);
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
            },
          },
          description: "payment intent for Magda Dimistrescu's Shop",
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
        setError(`Payment failed: ${payload.error.message}`);
      } else {
        router.push("/succes");
      }
    }
  };

  return (
    <div className="relative min-h-[100vh] w-full bg-gray-100 secondaryGradient mt-[-3rem]">
      <Section>
        <div className="mainGradient w-full md:w-[66%]" />
        <Wrapper>
          <div className="w-full flex justify-between">
            <div className="w-full md:w-1/2">
              {cart.map((item: Product) => (
                <div key={item.id}>{item.title}</div>
              ))}
            </div>
            <form
              className=" p-[8px] shadow-black/40 shadow-2xl bg-gradient-to-tr from-pink to-yellow rounded-lg w-full max-w-[500px] mx-auto mb-[3rem]"
              onChange={({ target }) => handleFormData(target)}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="w-full h-full flex flex-col p-[1rem] md:p-[2rem] bg-white rounded-md  justify-start items-start">
                <div className="w-full flex flex-col">
                  <CheckoutNameInput />
                  <CheckoutEmailInput />
                  <CheckoutShippingInput />
                </div>

                <div className="w-full grid grid-cols-2 gap-x-5 mt-3">
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
                      {langEn ? "Card expiry date" : "Data expirării cardului"}
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
                    Checkout
                  </button>
                )}
                {error && <p>{error}</p>}
              </div>
            </form>
          </div>
        </Wrapper>
      </Section>
    </div>
  );
};

export default Checkout;
