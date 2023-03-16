import express, { json } from "express";
import bodyParser from "body-parser";
import { getEmailStatus } from "../helpers/email/verify-email.js";
import { sendOTP } from "../helpers/email/send-OTP.js";
import { getHashedOTP } from "../helpers/auth/hashing.js";
import { compare } from "../helpers/auth/hashing.js";
import {
  deleteOTP,
  findOTP,
  findUser,
  insertOTP,
} from "../helpers/misc/mongo-db-helpers.js";

const emailController = express.Router();

const jsonParser = bodyParser.json();

emailController.post("/send-otp", jsonParser, async (req, res) => {
  const email = req.body?.email?.trim().toLowerCase();
  const user = await findUser(email);

  const userOTP = await findOTP(email);

  if (userOTP) {
    deleteOTP(email);
  }

  const newOTP = `${100000 + Math.floor(Math.random() * 900000)}`;

  const hashedOTP = await getHashedOTP(newOTP);

  if (user) {
    insertOTP(email, hashedOTP, 300 * 1000);

    const emailResponse = await sendOTP(email, newOTP, "5 minutes");

    res.status(emailResponse.status).send({
      success: emailResponse?.status === 200,
      error: emailResponse?.err,
    });
  } else {
    res.status(200).send({
      success: true,
      error: {},
    });
  }
});

emailController.get("/verify-otp", async (req, res) => {
  try {
    let email = req.query.email;
    let OTPGuess = req.query.OTPGuess;

    if (!email || !OTPGuess) {
      res.status(400).send({ success: false });
    } else {
      const userOTP = await findOTP(email);

      if (!userOTP) {
        res.status(400).send({ success: false });
      } else {
        const expiry = userOTP.expiresAt;
        const hashedOTP = userOTP.hashedOTP;

        if (expiry < Date.now()) {
          await deleteOTP(email);
          res.status(400).send({
            success: false,
            error: "Code expired. Please request another one.",
          });
        } else {
          const isValid = compare(OTPGuess, hashedOTP);

          if (!isValid) {
            res.status(400).send({ success: false });
          } else {
            res.send({
              status: "verified",
              msg: "User email verified successfully",
            });
          }
        }
      }
    }
  } catch (e) {
    res.status(400).send({ success: false, error: e });
  }
});

emailController.get("/verify-email", async (req, res) => {
  const data = await getEmailStatus(req.query.email);

  res.send(data);
});

export default emailController;
