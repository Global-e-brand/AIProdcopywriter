import express, { json } from "express";
const apirouter = express.Router();
import bodyParser from "body-parser";
import fetch from "node-fetch";
import sendGPTResponse from "../helpers/send-GPT-response.js";
import createPrompt from "../helpers/prompt-creator.js";

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// parse application/json
// app.use(bodyParser.json());
// apirouter.post("/", (req, res) => {
//   let data = { foo: "backend called" };
//   res.json(data);
// });


// for each of the following endpoints, the req object should include 
// inputOne, inputTwo, tone, and category props via "body"

apirouter.post("/calltoaction", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/eventcopy", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: true, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/landingpageherotext", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/listicle", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/metadescription", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: true, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/microcopy", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/questiongenerator", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/socialprooftext", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/subheader", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: true, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/testimonialrewriter", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/blogconclusion", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/blogideas", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/blogintro", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/blogoutline", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: true, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/blogtitle", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/blogtitlelisticle", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/bulletpointtoblogsection", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/keywordgenerator", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/cancellationemail", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/emailsubjectlines", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/confirmationemails", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/followupemail", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: false, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/thankyounote", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: true, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

apirouter.post("/welcomeemail", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, { inputOne: true, inputTwo: true, inputThree: true});
  const response = await sendGPTResponse(prompt);
  res.send(response);
});

export default apirouter;
