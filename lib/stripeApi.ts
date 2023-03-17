import Stripe from "stripe";

export const stripeAPI = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export default stripeAPI;
