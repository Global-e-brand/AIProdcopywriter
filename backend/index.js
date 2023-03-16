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
import contentController from "./controllers/content.controller.js";
import emailController from "./controllers/email.controller.js";
import bodyParser from "body-parser";
import { getUserId } from "./general/common.function.js";
import checkTrial from "./controllers/checkTrial.js";

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
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/posts", router);

app.use("/api", apirouter);

app.use("/auth", authrouter);

app.use("/payment", paymentRouter);

app.use("/user", userController);

app.use("/content", contentController);

app.use("/email", emailController);
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
app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
