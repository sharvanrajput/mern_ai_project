
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.HOST_EMAIL,
        pass: process.env.HOST_EMAIL_PAS,
    },
});


export const sendMail = async (to, otp) => {
    await transporter.sendMail({
        from: process.env.HOST_EMAIL,
        to: to,
        subject: "Reset you Password",
        text: "ONE TIME PASSWORD", // plain‑text body
        html: `<p> This is you reset password otp  <b>${otp}</b> , it expires in 5 min</p>`, // HTML body
    });

    console.log("Message sent:", info.messageId);
}

