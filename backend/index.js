import express from "express";
import router from "./routes/Post.js";
import apirouter from "./routes/Api.js";
import fetch from "node-fetch";
import dotenv from "dotenv";
import mongoose from "mongoose";

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
var PORT = 3000;

app.use("/posts", router);
app.use("/api", apirouter);

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
