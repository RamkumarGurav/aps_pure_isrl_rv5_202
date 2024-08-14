import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NM_EMAIL,
    pass: process.env.NM_EMAIL_PASS,
  },
});

export const mailOptions = {
  from: process.env.NM_EMAIL,
  to: process.env.NM_EMAIL,
};
