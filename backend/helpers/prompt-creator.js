import { getCategoryData } from "./mongo-db-helpers.js";

const createPrompt = async (req, activeComponents) => {
  console.log(activeComponents);
  const categoryData = await getCategoryData(req.body.category);
  let inputSection1 = "";
  let inputSection2 = "";
  let inputSection3 = "";

  if (categoryData.length != 0) {
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

    if (activeComponents.inputThree) {
      inputSection3 = `${
        categoryData[0].promptQuestionThree + `[${req.body.tone}]`
      }`;
    }
  }

  return (
    categoryData[0].trainingPrompt +
    "\n\nInput: " +
    inputSection1 +
    inputSection2 +
    inputSection3 +
    "\nOutput: "
  );
};

export default createPrompt;
