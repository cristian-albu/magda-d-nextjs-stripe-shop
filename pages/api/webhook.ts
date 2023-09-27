// Import necessary modules and libraries:
// NextApiRequest and NextApiResponse from the next package for handling HTTP requests and responses.
// buffer from the micro package for buffering the request body.
// stripeAPI from the stripeApi module for constructing the Stripe event object.
// pb from the pocketBaseClient module for interacting with the Pocketbase database.
// Record from the pocketbase module for defining the record type.

import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";
import stripeAPI from "@/lib/stripeApi";
import pb from "@/lib/pocketBaseClient";
import { Record } from "pocketbase";
import { transporter } from "@/lib/nodemailer";
import OrderMailData from "@/data/orderMailData";

// Set the config object to configure the API endpoint:
// bodyParser is set to false because the buffer function is used to read the request body.
// externalResolver is set to true because an external resolver is used to handle requests.
export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
};

// Define the handler function to handle the webhook event:

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Check if the request method is POST.
    if (req.method === "POST") {
        let event;

        // Buffer the request body and extract the Stripe signature from the headers.
        try {
            const rawBody = await buffer(req);
            const signature = req.headers["stripe-signature"];

            //   Use stripeAPI.webhooks.constructEvent() to construct the Stripe event object.

            event = stripeAPI.webhooks.constructEvent(rawBody.toString(), signature!, process.env.WEB_HOOK_SECRET!);
        } catch (error: any) {
            let message = `Webhook Error: ${error.message}`;
            console.log(message);
            return res.status(400).json({ message });
        }

        // If the event type is not checkout.session.completed, return a 400 status code with an error message.
        // Otherwise, extract the session object from the event data.
        if (event.type === "payment_intent.succeeded") {
            const session: any = event.data.object;

            //  Authenticate with the Pocketbase database using the admin email and password.

            try {
                await pb.admins.authWithPassword(process.env.POCKETBASE_ADMIN_EMAIL!, process.env.POCKETBASE_ADMIN_PASS!);
            } catch (error: any) {
                let message = `There was an error authenticating to Pocketbase: ${error.message}`;
                console.log(message);
                return res.status(400).json({ message });
            }

            //  Get the full list of products from the database.

            let records;
            try {
                records = await pb.collection("products").getFullList();
            } catch (error: any) {
                let message = `There was an error trying to 
        get the collection "products" from Pocketbase: ${error.message}`;
                console.log(message);
                return res.status(400).json({
                    message,
                });
            }

            //   Parse the order details metadata from the session object.

            const orderItems: any = JSON.parse(session.metadata.data);

            if (!Array.isArray(orderItems)) {
                let message = `orderItems is not an array`;
                console.log(message);
                return res.status(400).json({
                    message,
                });
            }

            //   Loop through each item in the order details and check if it has the proper types.

            for (const item of orderItems) {
                if (typeof item.id === "string" && typeof item.q === "number" && typeof item.d === "boolean") {
                    // Find the corresponding record in the products collection and update its stock if it's a physical product and there's enough stock available.
                    const currentRecord = records.findIndex((e: Record) => e.id === item.id);

                    if (!item.d && records[currentRecord].stock >= item.q) {
                        await pb.collection("products").update(records[currentRecord].id, {
                            stock: records[currentRecord].stock - item.q,
                        });
                    }
                } else {
                    let message = `orderItems doesn't have the proper types`;
                    console.log(message);
                    return res.status(400).json({
                        message,
                    });
                }
            }

            // Create a new order entry in the orders collection with the order details and customer information.

            const orderDate = new Date(Date.now());
            const adrs = session.shipping.address;
            const customer_name = session.shipping.name;
            const customer_phone = session.shipping.phone;
            let adrsData;

            let orderId: string;
            let orderLang: string = session.metadata.lang;

            if (
                typeof session.receipt_email === "string" &&
                typeof session.amount === "number" &&
                typeof session.description === "string" &&
                typeof adrs.city === "string" &&
                typeof customer_name === "string" &&
                typeof customer_phone === "string" &&
                typeof adrs.postal_code === "string"
            ) {
                adrsData =
                    orderLang === "en"
                        ? `Name: ${customer_name}, Phone: ${customer_phone}, City: ${adrs.city}, Address: ${adrs.line1} ${
                              adrs.line2 ? adrs.line2 : ""
                          }, Postal Code: ${adrs.postal_code}`
                        : `Nume: ${customer_name}, Telefon: ${customer_phone}, Oraş: ${adrs.city}, Adresă: ${adrs.line1} ${
                              adrs.line2 ? adrs.line2 : ""
                          }, Cod poştal: ${adrs.postal_code}`;
                try {
                    const res = await pb.collection("orders").create({
                        json: session,
                        customerEmail: session.receipt_email,
                        totalSum: session.amount / 100,
                        address: adrs.city !== "Digital" ? JSON.stringify(adrsData) : JSON.stringify(session.receipt_email),
                        orderDate: orderDate.toUTCString(),
                        orderDetails: orderItems,
                    });

                    orderId = res.id;
                } catch (error: any) {
                    let message = `There was an error trying to create in the collection "orders" from Pocketbase: ${error.message}`;
                    console.log(message);
                    return res.status(400).json({
                        message,
                    });
                }
            } else {
                let message = `order items don't have the proper types`;
                console.log(message);
                return res.status(400).json({
                    message,
                });
            }

            //   Send confirmation email

            const emailData =
                orderLang === "en"
                    ? {
                          email: session.receipt_email,
                          message: `Order created at ${orderDate} ${adrs.city !== "Digital" ? `for: ${adrsData}` : ""}. 
        `,
                          details: `${session.description}`,
                          amount: `The total cost of the order is ${session.amount / 100} lei`,
                          orderId: orderId,
                          orderLang: orderLang,
                      }
                    : {
                          email: session.receipt_email,
                          message: `Comanda a fost creată la ${orderDate}  ${
                              adrs.city !== "Digital" ? `pentru: ${adrsData}` : ""
                          }. 
          `,
                          details: `${session.description}`,
                          amount: `Costul total al comenzii este ${session.amount / 100} lei`,
                          orderId: orderId,
                          orderLang: orderLang,
                      };
            const mailOptions = {
                from: process.env.NODEMAILER_EMAIL,
                to: `${process.env.NODEMAILER_EMAIL}, ${session.receipt_email}`,
            };
            if (!emailData.email) {
                return res.status(400).json({ message: "Bad request" });
            }

            let htmlPayload = OrderMailData(emailData);
            const textPayload = `${orderLang === "en" ? `New order for` : `Comandă nouă pentru:`} ${emailData.email}. ${
                emailData.message
            }. ${emailData.details} ${emailData.amount}. ${
                orderLang === "en"
                    ? `Payment was processed via card. You will receive your products as soon as possible. The order ID is:`
                    : `Plata a fost procesată cu cardul. Veți primi produsele dvs. cât mai curând posibil. Codul comenzii este:`
            }  ${orderId}`;

            try {
                // await transporter.sendMail({
                //     ...mailOptions,
                //     subject: orderLang === "en" ? "New order from Magda Dimitrescu" : "Comandă nouă de la Magda Dimitrescu",
                //     text: textPayload,
                //     html: htmlPayload,
                //     amp: htmlPayload,
                // });
                //   Return a 200 status code with the session ID.
                res.status(200).json({ sessionId: session.id });

                await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key: process.env.WEB3_ACCESS_KEY,
                        subject:
                            orderLang === "en" ? "New order from Magda Dimitrescu" : "Comandă nouă de la Magda Dimitrescu",
                        name: emailData.email,
                        email: session.receipt_emai,
                        message: textPayload,
                    }),
                });

                console.log(session.id);
            } catch (error) {
                console.log(error);
            }
        }
    } else {
        let message = "Method not allowed";
        console.log(message);
        res.status(405).json({ message });
    }
};

export default handler;
