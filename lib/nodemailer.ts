import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASS,
  },
});

export const mailOptions = {
  from: process.env.NODEMAILER_EMAIL,
  to: `${process.env.NODEMAILER_EMAIL}`,
};
