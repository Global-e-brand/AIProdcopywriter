import express from "express";
import router from "./routes/Post.js";
import apirouter from "./routes/Api.js";
import authrouter from "./routes/Auth.js";
import paymentRouter from "./routes/Payment.js";
import fetch from "node-fetch";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import passport from "passport";
import session from "express-session";
import userController from "./controllers/user.controller.js";
import {
  contentHistory,
  createContent,
} from "./controllers/content.controller.js";
import emailController from "./controllers/email.controller.js";
import bodyParser from "body-parser";
import { getUserId } from "./general/common.function.js";
import checkTrial from "./controllers/checkTrial.js";
import contentRouter from "./routes/Content.js";
import analyticsController from "./controllers/analytics.controller.js";
import { validateGuest } from "./helpers/guest/validateGuest.js";
import adminRouter from "./routes/admin.js";
import { validateAdmin } from "./helpers/admin/validateadmin.helper.js";
import subscriberController from "./controllers/subscriber.controller.js";
import verifysubscriber from "./controllers/verifysubscriber.js";

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { dbName: "TrainingData" },
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

const app = express();
const __dirname = path.resolve();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

app.options("*", (req, res) => {
  res.sendStatus(200);
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/posts", router);

app.use("/api", apirouter);

app.use("/auth", authrouter);

app.use("/payment", paymentRouter);

app.use("/user", userController);

app.use("/content", contentRouter);

app.use("/email", emailController);

app.use("/dashboard", analyticsController);

app.use("/admin", adminRouter);
app.use("/subscribe", subscriberController);

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname + "/public")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
  });
}
app.get("/checkpayment", async (req, res) => {
  // let userId = await getUserId();
  // console.log(userId);
  // let result = await checkTrial(userId);
  // if (result) {
  //   res.send(true);
  // } else {
  //   console.log("Redirect to Payments");
  //   res.send(false);
  // }
  res.send(true);
});

app.post("/deletion", (req, res) => {
  res.status(200).send("OK");
});
// testing

// app.post("/subscribe", (req, res) => {
//   let email = req.body.email;
//   console.log(email);
//   console.log("subscribed");
// });

app.post("/subscribeguest", async (req, res) => {
  console.log("SUBSCRIBE-->", req.body);
  let showPopUp = await verifysubscriber(req.body.browserID);
  // console.log(showPopUp);
  res.send(Boolean(showPopUp));
});

//testing
app.post("/checkguest", async (req, res) => {
  console.log("browser id", req.body.id);
  let result = await validateGuest(req.body.id);
  res.send(result);
});

app.get("/useraccess", async (req, res) => {
  let Id = await getUserId(req);
  let isAdmin = await validateAdmin(Id);
  res.status(200).send(isAdmin);
});

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
