import { getCategoryData } from "../misc/mongo-db-helpers.js";

const createPrompt = async (req, activeComponents) => {
  const categoryData = await getCategoryData(req.body.category);
  let inputSection1 = "";
  let inputSection2 = "";
  let inputSection3 = "";
  let trainingData = "";
  let prompt = "";

  // ensuring all active fields are filled
  if (
    (activeComponents.inputOne && req.body.inputOne.trim() === "") ||
    (activeComponents.inputTwo && req.body.inputTwo.trim() === "") ||
    (activeComponents.inputThree && req.body.tone.trim() === "")
  ) {
    return "";
  }

  if (categoryData.length != undefined && categoryData.length != 0) {
    trainingData = categoryData[0].trainingPrompt;

    if (activeComponents.inputOne) {
      inputSection1 = `${
        categoryData[0].promptQuestionOne + ` [${req.body.inputOne}] `
      }`;
    }

    if (activeComponents.inputTwo) {
      inputSection2 = `${
        categoryData[0].promptQuestionTwo + `[${req.body.inputTwo}]`
      }`;
    }

    // if (activeComponents.inputThree) {
    //   inputSection3 = `${
    //     categoryData[0].promptQuestionThree + `[${req.body.tone}]`
    //   }`;
    // }

    prompt =
      trainingData +
      "\n\nInput: " +
      inputSection1 +
      inputSection2 +
      // inputSection3 +
      "\nOutput: ";
  }

  return prompt;
};

export default createPrompt;
