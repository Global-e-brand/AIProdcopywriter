import bodyParser from "body-parser";
import express from "express";
import {Configuration,OpenAIApi} from "openai";
import dotenv from "dotenv";

dotenv.config();

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

let imageGenerationController = express.Router();

imageGenerationController.use(bodyParser.urlencoded({ extended: false }));

imageGenerationController.use(bodyParser.json());

imageGenerationController.get("/", bodyParser.json(), async (req, res) => {
    const configuration = new Configuration({
        apiKey: process.env.OPEN_AI_KEY,
      });
      const openai = new OpenAIApi(configuration);
    // 256 x 256,
    // 512 x 512, 
    // 1024 x 1024

  try {
    const response = await openai.createImage({
      prompt: "a white siamese cat",
      n: 1,
      size: "1024x1024",
    });
    let image_url = response.data.data[0].url;

    res.status(200).send({
      success: true,
      image_url: image_url
    });

  } catch (e) {
    res.status(500).send(e.message);
  }
});

export default imageGenerationController;
