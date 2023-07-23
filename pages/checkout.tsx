import {
    CheckoutCityInput,
    CheckoutEmailInput,
    CheckoutNameInput,
    CheckoutPhoneInput,
    CheckoutPostalCode,
    CheckoutShippingInput,
} from "@/components/CheckoutComponents";
import Wrapper from "@/components/Wrapper";
import CartContext from "@/contexts/CartProvider";
import React, { useState, useContext, useCallback, useEffect } from "react";
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { styles } from "@/components/TextInput";
import { Checkbox } from "@/components/Checkbox";
import { PrivacyContext } from "@/components/Gdpr/PrivacyContext";
import axios from "axios";
import { useRouter } from "next/router";
import { cardStyle } from "@/data/checkoutCardStyle";
import Image from "next/image";
import pb from "@/lib/pocketBaseClient";
import parsePbImage from "@/lib/parseImage";
import { Record } from "pocketbase";
import { InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";

// Provide a backup transport in case no transport is retrieved from the server
const backUpTransport: Product = {
    id: "bkupshp1",
    title: "Transport",
    price: 25,
    slug: "transport",
    quantity: 1,
    stock: 9999,
    digital: true,
    image: "",
    summary: "transport",
};

const Checkout: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ transport, shipping }) => {
    // Initializing a new router object using the useRouter hook.
    const router = useRouter();

    // Destructuring values from the CartContext component.
    const { cart, totalPrice, dispatch, REDUCER_ACTIONS } = useContext(CartContext);

    // Declaring a new function, RemoveFromCart, and assigning it a useCallback hook.
    const RemoveFromCart = useCallback(() => {
        dispatch({
            type: REDUCER_ACTIONS.REMOVE_ALL,
        });
    }, [dispatch, REDUCER_ACTIONS.REMOVE_ALL]);

    // Destructuring values from the PrivacyContext component, setting the type of 'any' to the values.
    const { openPrivacy, langEn, setCookiePref, setCookieAnalytics, handleSave }: any = useContext(PrivacyContext);

    // Declaring three constants, shippingEnExists, shippingRoExists, and shippingExists.
    // They are boolean values that determine if certain items exist in the cart.
    const shippingEnExists = cart.findIndex((item: Product) => item.id === "nvpkiir4gkmyozd") > 0;
    const shippingRoExists = cart.findIndex((item: Product) => item.id === "sozc6w3vydixiwj") > 0;
    const shippingExists = cart.findIndex((item: Product) => item.id === "bkupshp1") > 0;

    // Initialize the shipping tax as a product based on language
    const shippingItem = langEn ? (shipping ? shipping : backUpTransport) : transport ? transport : backUpTransport;

    // Add to cart function for the shipping product

    const addToCart = useCallback(
        (shipItem: Product) =>
            dispatch({
                type: REDUCER_ACTIONS.ADD,
                payload: { ...shipItem, quantity: 1 },
            }),
        [dispatch, REDUCER_ACTIONS.ADD]
    );

    // Remove from cart function for the shipping product
    const RemoveShippingFromCart = useCallback(
        (product: Product) => {
            dispatch({
                type: REDUCER_ACTIONS.REMOVE,
                payload: { ...product, quantity: 1 },
            });
        },
        [dispatch, REDUCER_ACTIONS.REMOVE]
    );

    // Initializing form input that are not handled by stripe state variables with the useState hook, checkoutState.

    const [checkoutState, setCheckoutState] = useState({
        address: ``,
        email: ``,
        name: ``,
        phone: "",
        city: ``,
        zip: ``,
    });

    const [checkboxState, setCheckboxState] = useState(false);

    // Initialize processing state. This will become true after an order is placed. This way the user will not click again on the same button until he recieves confirmation or an error
    const [processing, setProcessing] = useState(false);

    // Initialize stripe
    const elements = useElements();
    const stripe = useStripe();
    // Initialize error state for stripe elements
    const [error, setError] = useState({
        num: false,
        exp: false,
        cvc: false,
        err: "",
    });

    const [showCardFields, setShowCardFields] = useState(false);

    // Handle form data that is not handled by stripe as a whole function. This is easier than passing state to each component
    const handleFormData = (target: EventTarget) => {
        if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
            if (target.name === "Name" || target.name === "Nume") setCheckoutState({ ...checkoutState, name: target.value });

            if (target.name === "Email") setCheckoutState({ ...checkoutState, email: target.value });

            if (target.name === "Phone" || target.name === "Telefon")
                setCheckoutState({ ...checkoutState, phone: target.value });

            if (target.name === "Address" || target.name === "Adresa")
                setCheckoutState({ ...checkoutState, address: target.value });

            if (target.name === "City" || target.name === "Oraş") setCheckoutState({ ...checkoutState, city: target.value });

            if (target.name === "Zip Code" || target.name === "Cod Poştal")
                setCheckoutState({ ...checkoutState, zip: target.value });
        }
    };

    // Handle errors of stripe elements.
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

    // Handle the privacy policy checkbox. Force the agreement so that when the form is submited we can be certain that the user agreed with the policy

    const handlePrivacy = () => {
        setCheckboxState((checkboxState) => !checkboxState);

        if (!checkboxState === true) {
            setCookiePref(true);
            setCookieAnalytics(true);
        }
    };

    // Revalidate each field in the checkout form
    const finalValidation = () => {
        if (
            checkoutState.address.length <= 10 ||
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(checkoutState.email) ||
            checkoutState.name.length < 1 ||
            !checkboxState ||
            checkoutState.city.length <= 2 ||
            checkoutState.zip.length !== 6 ||
            checkoutState.phone.length < 9 ||
            checkoutState.phone.length > 11
        ) {
            return false;
        } else {
            return true;
        }
    };

    // Check for physical products in the cart

    const hasPhysicalProducts = cart.filter((item: Product) => !item.digital).length > 0;

    useEffect(() => {
        // Provide some default values for the payment intent in case the cart does not contain physical products so that the 3 inputs for address can be hidden
        if (!hasPhysicalProducts) {
            setCheckoutState({
                ...checkoutState,
                address: "Digital products",
                zip: "000000",
                city: "Digital",
            });
        }

        // Add the shipping product in the cart based on language and check so that there are no duplicates.

        if (hasPhysicalProducts && cart.length > 0) {
            if (!shippingExists && !shippingEnExists && !shippingRoExists) {
                addToCart(shippingItem);
            } else if (langEn && shippingRoExists) {
                RemoveShippingFromCart(cart[cart.findIndex((item: Product) => item.id === "sozc6w3vydixiwj")]);
                addToCart(shippingItem);
            } else if (!langEn && shippingEnExists) {
                RemoveShippingFromCart(cart[cart.findIndex((item: Product) => item.id === "nvpkiir4gkmyozd")]);
                addToCart(shippingItem);
            }
        }
    }, []);

    // Create the payment intent

    const handlePaymentIntent = async (e: any) => {
        e.preventDefault();

        // Save the cookies
        handleSave();

        let res;
        // Payload structure as stripe needs it inside the payment intent API endpoint
        const payload = {
            cartItems: cart,
            shipping: {
                name: checkoutState.name,
                phone: checkoutState.phone,
                address: {
                    line1: checkoutState.address,
                    city: checkoutState.city,
                    postal_code: checkoutState.zip,
                },
            },
            description: `Comanda: ${cart.map(
                (item: Product, index: number) =>
                    `${item.title}: ${item.price} lei X ${item.quantity}${index < cart.length - 1 ? ", " : ""}`
            )}`,
            receipt_email: checkoutState.email,
            lang: langEn ? "en" : "ro",
        };

        try {
            // Make the post request
            res = await axios.post("/api/payment-intent", {
                payload: payload,
            });
        } catch (err: any) {
            setProcessing(true);
            if (err.response.data.message === "Items no longer in stock") {
                setError({
                    ...error,
                    err: langEn ? `Payment failed. Items out of stock` : `Plata a eşuat. Produsele nu mai sunt în stoc`,
                });
            }
        }

        // If the request is successful and all the necessary parts are present, confirm the card payment with stripe
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
                // Clear the cart and go to success page
                RemoveFromCart();

                router.push("/succes");
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
                            <Link href="/">{langEn ? "⬅️ Back to home" : "⬅️ Înapoi acasă"}</Link>
                            {cart.length > 0 && (
                                <>
                                    <h1 className="mb-5 text-2xl md:text-4xl mt-10">{langEn ? "Products: " : "Produse:"}</h1>
                                    {cart.map((item: Product) => (
                                        <div key={item.id} className="flex gap-3 mb-5">
                                            <Image
                                                src={item.image}
                                                width={50}
                                                height={50}
                                                alt=""
                                                className="w-[50px] h-auto object-contain"
                                            />
                                            <div className="flex flex-col">
                                                <p className="text-lg font-bold">{item.title}</p>
                                                <p>{item.summary}</p>
                                                <div className="flex gap-3">
                                                    {item.id != shippingItem.id && (
                                                        <p>
                                                            {langEn ? "Quantity: " : "Cantitate: "}
                                                            {item.quantity}
                                                        </p>
                                                    )}
                                                    <p>
                                                        {langEn ? "Price: " : "Preţ: "}
                                                        {item.price} lei
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <p className="text-lg font-bold pl-[62px] mb-10">Total: {totalPrice}</p>{" "}
                                </>
                            )}
                        </div>
                        <div className="w-full md:w-1/2">
                            {cart.length > 0 ? (
                                <form
                                    className={`p-[8px] shadow-black/40 shadow-2xl bg-gradient-to-tr from-pink to-yellow rounded-lg w-full max-w-[500px] mx-auto mb-[3rem]`}
                                    onChange={({ target }) => handleFormData(target)}
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <div className="w-full h-full flex flex-col p-[1rem] md:p-[2rem] bg-white rounded-md  justify-start items-start relative">
                                        {showCardFields && (
                                            <div className="absolute top-0 right-0 p-5">
                                                <Image
                                                    src={"/assets/stripe_logo.png"}
                                                    width={75}
                                                    height={40}
                                                    alt="stripe logo"
                                                />
                                            </div>
                                        )}
                                        <div className="w-full grid grid-cols-2 gap-x-5 mt-3 ">
                                            {!showCardFields && (
                                                <>
                                                    <div className="col-span-2">
                                                        <CheckoutNameInput />
                                                    </div>
                                                    <div className="col-span-2">
                                                        <CheckoutEmailInput />
                                                    </div>
                                                    <div className="col-span-2">
                                                        <CheckoutPhoneInput />
                                                    </div>

                                                    {hasPhysicalProducts && (
                                                        <>
                                                            <div className="col-span-2">
                                                                <CheckoutShippingInput />{" "}
                                                            </div>

                                                            <CheckoutCityInput />
                                                            <CheckoutPostalCode />
                                                        </>
                                                    )}

                                                    <div className="flex flex-wrap item-center gap-1 mb-5">
                                                        <Checkbox
                                                            name="contactCheckBox"
                                                            text={langEn ? "I agree with the" : "Sunt de acord cu"}
                                                            checked={checkboxState}
                                                            onChange={handlePrivacy}
                                                        />

                                                        <button onClick={openPrivacy} className="text-purple">
                                                            {langEn ? "Privacy policy*" : "Politica de confidenţialitate*"}
                                                        </button>
                                                    </div>
                                                </>
                                            )}

                                            {showCardFields && (
                                                <>
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
                                                </>
                                            )}
                                        </div>

                                        {showCardFields ? (
                                            <button
                                                className="btnPrimary2"
                                                onClick={handlePaymentIntent}
                                                disabled={processing}
                                            >
                                                {langEn ? "Place order" : "Plasează comanda"}
                                            </button>
                                        ) : (
                                            <>
                                                {finalValidation() ? (
                                                    <button
                                                        className="btnPrimary2"
                                                        onClick={() => setShowCardFields((prev) => !prev)}
                                                        disabled={processing}
                                                    >
                                                        {processing
                                                            ? langEn
                                                                ? "Processing"
                                                                : "Se procesează"
                                                            : langEn
                                                            ? "Go to payment"
                                                            : "Plătește comanda"}
                                                    </button>
                                                ) : (
                                                    <button className="btnPrimary2 " disabled>
                                                        {langEn ? "Go to payment" : "Plătește comanda"}
                                                    </button>
                                                )}
                                                {error.err.length > 1 && (
                                                    <p className="mt-3 text-red-500 font-bold">{error.err}</p>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </form>
                            ) : (
                                <div
                                    className={`p-[8px] shadow-black/40 shadow-2xl bg-gradient-to-tr from-pink to-yellow rounded-lg w-full max-w-[500px] mx-auto mb-[3rem] `}
                                >
                                    <div className="w-full h-full flex flex-col p-[1rem] md:p-[2rem] bg-white rounded-md  justify-center items-center">
                                        <p className="text-3xl">😕</p>

                                        <p>{langEn ? "You have nothing in your cart" : "Nu ai nimic în coş"}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    );
};

export default Checkout;

export const getStaticProps = async () => {
    try {
        const coll = "products";
        const items = await Promise.all([
            pb.collection(coll).getOne("sozc6w3vydixiwj"),
            pb.collection(coll).getOne("nvpkiir4gkmyozd"),
        ]);

        const data: ProductList = items.map((item: Record) => ({
            id: item.id,
            title: item.title,
            slug: item.slug,
            price: item.price,
            summary: item.summary,
            stock: item.stock,
            digital: item.productTypeDigital,
            image: parsePbImage(coll, item.id, item.image),
            quantity: 0,
        }));

        const transport = data[0];
        const shipping = data[1];

        return {
            props: { transport, shipping },
        };
    } catch (error) {
        console.error("Error fetching product data:", error);
        return {
            props: { item_ebook: null, item_hardcover: null },
        };
    }
};
