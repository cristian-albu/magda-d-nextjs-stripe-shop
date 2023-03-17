import stripeAPI from "@/lib/stripeApi";
import { NextApiRequest, NextApiResponse } from "next";

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  function calculateOrderAmount(cartItems: ProductList) {
    return (
      cartItems.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0) * 100
    );
  }

  if (req.method === "POST") {
    const { cartItems, description, receipt_email, shipping } = req.body;

    let paymentIntent;

    try {
      paymentIntent = await stripeAPI.paymentIntents.create({
        amount: calculateOrderAmount(cartItems),
        currency: "ron",
        description,
        payment_method_types: ["card"],
        receipt_email,
        shipping,
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      console.log(error);
      res
        .status(400)
        .json({ error: `An error occured, unable to create payment intent` });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
