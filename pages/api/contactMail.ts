import { mailOptions, transporter } from "@/lib/nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export const mail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: "Bad request" });
    }

    let htmlPayload = `<!doctype html>
    <html>
    <div style="width: 100%; background-color: #f2f2f2; box-sizing: border-box; margin: 0px; padding: 50px; font-family: 'Trebuchet MS', sans-serif;">
              <div style="padding: 25px; border-radius: 10px; background-color: #fff; margin-left: auto; margin-right:auto">
                <h1 style="font-size: 25px">From Aurora Love</h1>
               
                <p>Name: ${data.name}</p>
                <p>Email: ${data.email}</p>
                <p>Mesaj: ${data.message}</p>
              </div>
            </div>
    </html>`;
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "From Aurora Love",
        text: `Nume: ${data.name}, Email: ${data.email}, Mesaj: ${data.message}`,
        html: htmlPayload,
        amp: htmlPayload,
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
