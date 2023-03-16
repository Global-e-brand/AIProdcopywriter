import nodemailer from "nodemailer";

export const sendOTP = async (email, otp, expiryTime) => {
  let err = null;
  let status = 200;

  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    auth: {
      user: process.env.COMPANY_EMAIL,
      pass: process.env.COMPANY_EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: `${process.env.COMPANY_EMAIL}`,
    to: email,
    subject: "Email verification code for CreativeWriter.AI",
    text: otp,
    html: `
        <h1>Your verification code: ${otp}</h1>
        <p style="text-align: center">
        Your code will expire in <b>${expiryTime}</b>
        </p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    let status = 200;

    if (error) {
      console.log(`There was an error: ${error}`);
      status = 500;
      err = error;
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return {
    error: err,
    status: status,
  };
};
