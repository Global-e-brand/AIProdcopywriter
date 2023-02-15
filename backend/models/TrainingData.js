import mongoose from "mongoose";

const trainingDataStructure = mongoose.Schema({
  parentcategory: {
    type: String,
    require: true,
  },
  childcategory: {
    type: String,
    require: true,
  },
  trainingPrompt: {
    type: String,
    require: false,
  },
  promptQuestionOne: {
    type: String,
    require: false,
  },
  promptQuestionTwo: {
    type: String,
    require: false,
  },
  promptQuestionThree: {
    type: String,
    require: false,
  },
});

const trainingData = mongoose.model("prompt", trainingDataStructure);

export default trainingData;
