import express from "express";
import router from "./routes/Post.js";
import apirouter from "./routes/Api.js";
import fetch from "node-fetch";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

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

app.use("/posts", router);
app.use("/api", apirouter);

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
