import Footer from "@/components/Footer";
import Gdpr from "@/components/Gdpr/Gdpr";
import Nav from "@/components/Nav";
import { CartProvider } from "@/contexts/CartProvider";
import PrivacyContext from "@/components/Gdpr/PrivacyContext";
import "@/styles/globals.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { Source_Sans_Pro } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Cart from "@/components/Cart";

const SourceSans = Source_Sans_Pro({
  weight: ["200", "400", "700"],
  subsets: ["cyrillic", "latin-ext"],
  variable: "--SourceSans",
});

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router.asPath.includes("checkout"));
  return (
    <>
      <Head>
        <meta property="og:site_name" content="Magda Dimistrescu" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={`${SourceSans.className} ${SourceSans.variable}`}
        style={{
          maxWidth: "100%",
          overflow: "hidden",
          paddingTop: "3rem",
          position: "relative",
        }}
      >
        <PrivacyContext>
          <CartProvider>
            <Elements stripe={stripePromise}>
              {!router.asPath.includes("checkout") && (
                <>
                  <Nav route={router.asPath.split("/")} />
                  <Cart />
                </>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={router.route}
                  initial="initialState"
                  animate="animateState"
                  exit="exitState"
                  transition={{
                    duration: 0.2,
                  }}
                  variants={{
                    initialState: {
                      opacity: 0,
                    },
                    animateState: {
                      opacity: 1,
                    },
                    exitState: {
                      opacity: 0,
                    },
                  }}
                >
                  <Component {...pageProps} />
                </motion.div>
              </AnimatePresence>
              <Gdpr />
              <Footer />
            </Elements>
          </CartProvider>
        </PrivacyContext>
      </div>
    </>
  );
}
