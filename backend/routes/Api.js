import express, { json } from "express";
const apirouter = express.Router();
import bodyParser from "body-parser";
import fetch from "node-fetch";

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// parse application/json
app.use(bodyParser.json());
apirouter.post("/", (req, res) => {
  console.log("bsdkk");
  res.json("api router called");
});

apirouter.post("/productdescription", async (req, res) => {
  var body = "";
  await req.on("data", async function (data) {
    body += data;
    await console.log(JSON.parse(body));
    var raw = JSON.stringify({
      model: "text-davinci-003",
      prompt: `${JSON.parse(body).data}`,
      temperature: 0.73,
      max_tokens: 280,
      top_p: 1,
      frequency_penalty: 0.91,
      presence_penalty: 0.78,
    });

    var requestOptions = {
      method: "POST",
      headers: {
        Authorization:
          "Bearer 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",
        "Content-Type": "application/json",
      },
      body: raw,
      redirect: "follow",
    };
    var data_value = await fetch(
      "https://api.openai.com/v1/completions",
      requestOptions
    );
    let respond = await data_value.json();
    console.log(respond.choices[0].text);
    return res.send(respond);
  });
  //   res.send("");
});

export default apirouter;
