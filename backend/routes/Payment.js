import express from "express";
import dotenv from "dotenv";
import paypal from "paypal-rest-sdk";
const paymentRouter = express.Router();
import bodyParser from "body-parser";
import getUser from "../controllers/getuserid.js";
import paymentData from "../models/PaymentsData.js";
var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
    "AUXTgnMQWHYpudUC8w72naWhq_DioSoHtWjR4WDrzMTn8reTTd8mErW-6d49MtJaIklYy45DHuoIOcUt",
  client_secret:
    "EP9iG8SXKO8Ep16gpHLDXzBQuocGpZio8hPUvM40WrAxkSZsInWxcjpr8eu4heEZ_8DDhaQaUcZAa6Jr",
});

paymentRouter.post("/order", bodyParser.json(), async (req, res) => {
  // console.log("PayPal Payment Gateway", req.body);
  let UserId = getUser(req);
  let userExist = await paymentData.findOne({ UserId });
  console.log("USER EXIST", userExist);
  if (userExist == undefined || userExist == null) {
    try {
      await paymentData.create({
        userId: UserId,
        orderId: req.body.data.orderID,
        payerId: req.body.data.payerID,
        paymentId: req.body.data.paymentID,
        paymentSource: req.body.data.paymentSource,
        paymentStatus: true,
      });
    } catch (err) {
      console.log("err", err);
    }
  }

  res.status(200).send("done");
});

export default paymentRouter;
