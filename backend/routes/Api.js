import express, { json } from "express";
const apirouter = express.Router();
import bodyParser from "body-parser";
import fetch from "node-fetch";
import getGPTResponse from "../helpers/api/get-GPT-response.js";
import createPrompt from "../helpers/api/prompt-creator.js";
import GptApi from "../controllers/GPTApi.js";
import  createContent  from "../controllers/content.controller.js";

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// for each of the following endpoints, the req object should include
// inputOne, inputTwo, tone, and category props via "body"

apirouter.post("/calltoaction", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/eventcopy", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/landingpageherotext", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/listicle", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/metadescription", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/microcopy", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/questiongenerator", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/socialprooftext", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/subheader", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/testimonialrewriter", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/blogconclusion", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/blogideas", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/blogintro", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/blogoutline", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/blogtitle", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/blogtitlelisticle", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post(
  "/bulletpointtoblogsection",
  bodyParser.json(),
  async (req, res) => {
    const prompt = await createPrompt(req, {
      inputOne: req.body.inputOneBool,
      inputTwo: req.body.inputTwoBool,
      inputThree: req.body.inputThreeBool,
    });
    const response = await getGPTResponse(prompt);
    await createContent(req,response);
    res.send(response);
  }
);

apirouter.post("/keywordgenerator", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/cancellationemail", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/emailsubjectlines", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/confirmationemails", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/followupemail", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/thankyounote", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/welcomeemail", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/adcopyvariants", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/facebookheadlines", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post(
  "/facebooklinkdescription",
  bodyParser.json(),
  async (req, res) => {
    const prompt = await createPrompt(req, {
      inputOne: req.body.inputOneBool,
      inputTwo: req.body.inputTwoBool,
      inputThree: req.body.inputThreeBool,
    });
    const response = await getGPTResponse(prompt);
    await createContent(req,response);
    res.send(response);
  }
);

apirouter.post("/facebooklisticle", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});
apirouter.post("/facebookprimarytext", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/generaladcopy", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/googledescriptions", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/googleheadlines", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});
apirouter.post("/linkedinadcopy", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/audiencerefiner", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/brandmission", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/brandvoice", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/mottogenerator", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/valueproposition", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/productdescription", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });

  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/add-emoji", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/bullet-points", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/carousel-post", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/youtube-ideas", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/hashtag-generator", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/hook-generator", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/instagram-caption", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/instagram-products", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/launchyourproduct", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post(
  "/relatable-experiences",
  bodyParser.json(),
  async (req, res) => {
    const prompt = await createPrompt(req, {
      inputOne: req.body.inputOneBool,
      inputTwo: req.body.inputTwoBool,
      inputThree: req.body.inputThreeBool,
    });
    const response = await getGPTResponse(prompt);
    await createContent(req,response);
    res.send(response);
  }
);

apirouter.post("/short-texthook", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post(
  "/tiktok-brainstorm-topics",
  bodyParser.json(),
  async (req, res) => {
    const prompt = await createPrompt(req, {
      inputOne: req.body.inputOneBool,
      inputTwo: req.body.inputTwoBool,
      inputThree: req.body.inputThreeBool,
    });
    const response = await getGPTResponse(prompt);
  await createContent(req,response);
    res.send(response);
  }
);

apirouter.post("/videocalltoaction", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post(
  "/youtubedescriptionintro",
  bodyParser.json(),
  async (req, res) => {
    const prompt = await createPrompt(req, {
      inputOne: req.body.inputOneBool,
      inputTwo: req.body.inputTwoBool,
      inputThree: req.body.inputThreeBool,
    });
    const response = await getGPTResponse(prompt);
  await createContent(req,response);
    res.send(response);
  }
);

apirouter.post("/youtubevideotitle", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/adjectiveaccelerator", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/analogygenerator", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post(
  "/bulletpointtoparagraph",
  bodyParser.json(),
  async (req, res) => {
    const prompt = await createPrompt(req, {
      inputOne: req.body.inputOneBool,
      inputTwo: req.body.inputTwoBool,
      inputThree: req.body.inputThreeBool,
    });
    const response = await getGPTResponse(prompt);
  await createContent(req,response);
    res.send(response);
  }
);

apirouter.post("/cliffhanger", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/essayintro", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/essayoutline", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/herostoryintro", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/herostoryvillain", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/passivetoactivevoice", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/pressreleaseintros", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});
apirouter.post("/rewritewithkeywords", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/sentencerewriter", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/simplifysentences", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/tonechanger", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/twosentencestories", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/verbbooster", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/growthideas", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/namegenerator", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/nextproduct", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/startupideas", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/viralideas", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/birthdaycard", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/clubhousebio", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/coverletter", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/loveletter", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/resumebulletpoints", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/showerthoughts", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/aida", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/bab", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/features-to-benefits", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response); 
  res.send(response);
});

apirouter.post("/fab", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/marketing-angles", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/pas", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/pppp", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

apirouter.post("/quest-copywriting", bodyParser.json(), async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req,response);
  res.send(response);
});

export default apirouter;
