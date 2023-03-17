import express, { json } from "express";
const apirouter = express.Router();
import bodyParser from "body-parser";
import fetch from "node-fetch";
import getGPTResponse from "../helpers/api/get-GPT-response.js";
import createPrompt from "../helpers/api/prompt-creator.js";
import { createContent } from "../controllers/content.controller.js";
import { checkAuthenticatedNoRedirect } from "../helpers/auth/check-authenticated.js";

apirouter.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

apirouter.use(checkAuthenticatedNoRedirect);
apirouter.use(bodyParser.json());

// for each of the following endpoints, the req object should include
// inputOne, inputTwo, tone, and category props via "body"

apirouter.post("/calltoaction", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/eventcopy", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/landingpageherotext", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/listicle", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/metadescription", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/microcopy", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/questiongenerator", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/socialprooftext", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/subheader", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/testimonialrewriter", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/blogconclusion", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/blogideas", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/blogintro", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/blogoutline", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/blogtitle", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/blogtitlelisticle", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
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
    await createContent(req, response);
    res.send(response);
  }
);

apirouter.post("/keywordgenerator", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/cancellationemail", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/emailsubjectlines", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/confirmationemails", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/followupemail", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/thankyounote", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/welcomeemail", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/adcopyvariants", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/facebookheadlines", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
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
    await createContent(req, response);
    res.send(response);
  }
);

apirouter.post("/facebooklisticle", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});
apirouter.post("/facebookprimarytext", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/generaladcopy", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/googledescriptions", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/googleheadlines", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});
apirouter.post("/linkedinadcopy", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/audiencerefiner", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/brandmission", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/brandvoice", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/mottogenerator", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/valueproposition", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/productdescription", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });

  const response = await getGPTResponse(prompt);
  // console.log("response_453",response)
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/add-emoji", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/bullet-points", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/carousel-post", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/youtube-ideas", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/hashtag-generator", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/hook-generator", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/instagram-caption", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/instagram-products", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/launchyourproduct", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
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
    await createContent(req, response);
    res.send(response);
  }
);

apirouter.post("/short-texthook", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
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
    await createContent(req, response);
    res.send(response);
  }
);

apirouter.post("/videocalltoaction", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
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
    await createContent(req, response);
    res.send(response);
  }
);

apirouter.post("/youtubevideotitle", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/adjectiveaccelerator", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/analogygenerator", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
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
    await createContent(req, response);
    res.send(response);
  }
);

apirouter.post("/cliffhanger", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/essayintro", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/essayoutline", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/herostoryintro", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/herostoryvillain", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/passivetoactivevoice", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/pressreleaseintros", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});
apirouter.post("/rewritewithkeywords", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/sentencerewriter", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/simplifysentences", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/tonechanger", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/twosentencestories", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/verbbooster", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/growthideas", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/namegenerator", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/nextproduct", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/startupideas", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/viralideas", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/birthdaycard", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/clubhousebio", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/coverletter", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/loveletter", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/resumebulletpoints", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/showerthoughts", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/aida", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/bab", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/features-to-benefits", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/fab", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/marketing-angles", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/pas", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/pppp", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

apirouter.post("/quest-copywriting", async (req, res) => {
  const prompt = await createPrompt(req, {
    inputOne: req.body.inputOneBool,
    inputTwo: req.body.inputTwoBool,
    inputThree: req.body.inputThreeBool,
  });
  const response = await getGPTResponse(prompt);
  await createContent(req, response);
  res.send(response);
});

export default apirouter;
