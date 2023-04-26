import bodyParser from "body-parser";
import express from "express";
import {Configuration,OpenAIApi} from "openai";
import  SerpApi from "google-search-results-nodejs";
import dotenv from "dotenv";

dotenv.config();

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

let imageGenerationController = express.Router();

imageGenerationController.use(bodyParser.urlencoded({ extended: false }));

imageGenerationController.use(bodyParser.json());

imageGenerationController.post("/generation", bodyParser.json(), async (req, res) => {
    const configuration = new Configuration({
        apiKey: process.env.OPEN_AI_KEY,
      });
      const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createImage({
      prompt: req.body.img_name,
      size: req.body.img_size,
      n: req.body.img_count,
    });
    
    let image_url = response.data.data;

    res.status(200).send({
      success: true,
      image_url: image_url
    });

  } catch (e) {
    res.status(500).send(e.message);
  }
});

imageGenerationController.post("/detection", async (req, res) => {
  
  const search = new SerpApi.GoogleSearch(process.env.SERPAPI_KEY);
  const params = {
    engine: "google_images",
    q: req.body.usr_img
  };
  const imageResults =async function(data) {
  const images=[];
  let resultOfImages=await data["images_results"].slice(0, 20);
  resultOfImages.forEach(item => {
    images.push({
      img_title:item.title,
      img_link:item.original
    })
  });
  res.status(200).send({images:images})
};

search.json(params, imageResults);
});

export default imageGenerationController;
