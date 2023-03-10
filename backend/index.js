import express from "express";
import router from "./routes/Post.js";
import apirouter from "./routes/Api.js";
import authrouter from "./routes/Auth.js";
import fetch from "node-fetch";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import passport from "passport";
import session from "express-session";
import user from "./controllers/user.controller.js";

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

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/posts", router);

app.use("/api", apirouter);

app.use("/auth", authrouter);

app.use("/user", user);



if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname + "/public")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
  });
}

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
