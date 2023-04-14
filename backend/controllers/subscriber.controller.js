import express from "express";
import bodyParser from "body-parser";
import mailchimp from "@mailchimp/mailchimp_marketing";
import dotenv from "dotenv";
import { getEmail } from "./getEmail.controller.js";
dotenv.config();

const subscriberController = express.Router();
const jsonParser = bodyParser.json();
import subscriberModel from "../models/subscribers.model.js";
import guestModel from "../models/guestModel.js";
import { getUserId } from "../general/common.function.js";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_KEY,
  server: "us21",
});

const addMailChimpSubscriber = async (email) => {
  const response = await mailchimp.lists.addListMember("e710de7256", {
    email_address: email,
    status: "subscribed",
  });
  console.log(response);
};

subscriberController.post("/", jsonParser, async (req, res) => {
  // let userID = getUserId(req);
  // console.log(userID);
  // let email = await getEmail(userID);
  // console.log(email);
  console.log(req.body);
  let { systemID, subscriber_email } = req.body;
  try {
    let isPresent = await guestModel.exists({
      systemID: systemID,
    });
    if (isPresent) {
      try {
        await guestModel.updateOne(
          { systemID: systemID },
          {
            subscriber_email: subscriber_email,
            isSubscribed: true,
          }
        );
      } catch (err) {
        console.log("ADD SUBSCRIBER ERR->", err);
      }
      try {
        await addMailChimpSubscriber(subscriber_email);
      } catch (err) {
        console.log("MAILCHIMP ERR->", err);
      }
    } else {
      console.log("email already exists");
    }
  } catch (err) {
    console.log(err);
  }
});

export default subscriberController;
