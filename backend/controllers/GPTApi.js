import fetch from "node-fetch";
import mongoose from "mongoose";
import trainingData from "../models/TrainingData.js";
export default async function GptApi(body) {
  let category = JSON.parse(body).category;
  let training_data;
  try {
    training_data = await trainingData.findOne({ childcategory: category });
  } catch (error) {
    console.log("err");
  }

  var raw = JSON.stringify({
    model: "text-davinci-003",
    prompt: `${training_data.trainingPrompt} Input: ${
      training_data.promptQuestionOne
    } ${JSON.parse(body).data} ${training_data.promptQuestionThree} ${
      JSON.parse(body).tone
    }`,
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
  
  return respond.choices;
}
