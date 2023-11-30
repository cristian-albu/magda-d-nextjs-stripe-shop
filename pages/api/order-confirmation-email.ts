import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

export type TOrderConfirmationEmailBody = {
    key?: string;
    to: string;
    from: string;
    subject: string;
    text: string;
    html: string;
};

export const orderConfirmationMail = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method != "POST") {
        return res.status(400).json({ message: "Bad request" });
    }

    const reqBody = req.body as TOrderConfirmationEmailBody;

    const validateReqBody =
        [reqBody.to, reqBody.from, reqBody.subject, reqBody.text, reqBody.html].every(
            (v: string) => typeof v === "string"
        ) && reqBody.key === process.env.ORDER_MAIL_KEY!;

    if (!validateReqBody) {
        return res.status(400).json({ message: "Bad request body" });
    }

    const msg: TOrderConfirmationEmailBody = {
        to: reqBody.to,
        from: reqBody.from,
        subject: reqBody.subject,
        text: reqBody.text,
        html: reqBody.html,
    };

    try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
        await sgMail.send(msg);
        return res.status(200).json({ message: "ok" });
    } catch (error) {
        console.log("Error", error);
        return res.status(500).json({ error: JSON.stringify(error) });
    }
};

export default orderConfirmationMail;
