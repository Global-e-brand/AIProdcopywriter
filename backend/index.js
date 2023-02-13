import express from "express";
import router from "./routes/Post.js";
import apirouter from "./routes/Api.js";
import fetch from "node-fetch";

const app = express();
var PORT = 3000;

app.use("/posts", router);
app.use("/api", apirouter);

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
