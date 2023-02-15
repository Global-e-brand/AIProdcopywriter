import express, { json } from "express";
const apirouter = express.Router();
import bodyParser from "body-parser";
import fetch from "node-fetch";
import GptApi from "../controllers/GPTApi.js";

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// parse application/json
app.use(bodyParser.json());
apirouter.post("/", (req, res) => {
  let data = { foo: "backend called" };
  res.json(data);
});

apirouter.post("/*", async (req, res) => {
  var body = "";
  await req.on("data", async function (data) {
    body += data;
    let response = await GptApi(body);
    return res.send(response);
  });
});

export default apirouter;
