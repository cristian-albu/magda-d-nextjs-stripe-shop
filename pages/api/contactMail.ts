import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

export const mail = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const data = req.body;
        if (!data.name || !data.email || !data.message) {
            return res.status(400).json({ message: "Bad request" });
        }
        try {
            sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

            await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.WEB3_ACCESS_KEY,
                    subject: "Contact Magda Dimitrescu",
                    email: data.email,
                    message: `${data.name} said: ${data.message}`,
                }),
            });

            return res.status(200).json({ success: true });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: `${error}` });
        }
    }

    return res.status(400).json({ message: "Bad request" });
};

export default mail;
