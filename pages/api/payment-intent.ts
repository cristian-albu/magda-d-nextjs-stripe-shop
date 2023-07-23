import { instanceOfProduct, instanceOfShipping } from "@/lib/instancesCheckers";
import pb from "@/lib/pocketBaseClient";
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

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const payload = req.body.payload;

    if (!payload.cartItems || !payload.description || !payload.receipt_email || !payload.shipping) {
        res.status(400).json({
            message: "Bad request. Payload should include all the required props.",
        });
    }

    if (
        !instanceOfProduct(payload.cartItems[0]) ||
        typeof payload.description !== "string" ||
        typeof payload.receipt_email !== "string" ||
        !instanceOfShipping(payload.shipping)
    ) {
        res.status(400).json({
            message: "Bad request. Payload should include all the required props.",
        });
    }

    const cartItems: Product[] = payload.cartItems;
    const orderLang: string = payload.lang ? payload.lang : "ro";
    const description: string = payload.description;
    const receipt_email: string = payload.receipt_email;
    const shipping: Shipping = payload.shipping;

    for (const item of cartItems) {
        const current = await pb.collection("products").getOne(item.id);

        if (current.stock < item.quantity) {
            return res.status(400).json({ message: "Items no longer in stock" });
        }
    }

    let paymentIntent;

    try {
        paymentIntent = await stripeAPI.paymentIntents.create({
            amount: calculateOrderAmount(cartItems),
            currency: "ron",
            description,
            payment_method_types: ["card"],
            receipt_email,
            shipping,
            metadata: {
                data: JSON.stringify(
                    cartItems.map((item: Product) => ({
                        id: item.id,
                        p: item.price,
                        q: item.quantity,
                        d: item.digital,
                    }))
                ),
                lang: orderLang,
            },
        });

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
        console.log(error);
        res.status(400).json({ error: `An error occured, unable to create payment intent` });
    }
};

export default handler;
