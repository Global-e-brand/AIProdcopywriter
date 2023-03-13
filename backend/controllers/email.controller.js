import express, { json } from "express";
import bodyParser from "body-parser";
import { verifyEmail } from "../helpers/email/verify-email.js";
import nodemailer from "nodemailer";

const emailController = express.Router();

const jsonParser = bodyParser.json();

emailController.post("/send-otp", jsonParser, async (req, res) => {
  let status = 200;
  let err = null;

  // const otp = Math.floor(Math.random());

  var transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "curry09213@hotmail.com",
      pass: "&*ASD-90=)}SAD)_{}ihi12DUN[",
    },
  });

  var mailOptions = {
    from: "curry09213@hotmail.com",
    to: req.body.email,
    subject: "Email verification code for AI ProdCopywriter",
    text: req.body.code,
    html: `<body style="text-align: center">
    <h1>See below for your verification code</h1>
    <p style="font-weight: 800; text-align: center">
      Code: ${req.body.code}
    </p>
    <br />
    <a href="http://localhost:3001/login">Click here to login</a>
    </body>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`There was an error: ${error}`);
      err = error;
      status = 500;
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.status(status).send({ success: status === 200, error: err });
});

emailController.get("/verify-otp", async (req, res) => {
  let status = 200;
  let err = null;

  res.status(status).send({ success: status === 200, error: err });
});

emailController.get("/verify-email", async (req, res) => {
  const data = await verifyEmail(req.query.email);

  res.send(data);
});

export default emailController;
