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

<<<<<<< HEAD:backend/models/TrainingData.js
const trainingData = mongoose.model("prompt", trainingDataStructure);

=======
const trainingData = mongoose.model("prompts", trainingDataStructure);
>>>>>>> feature/mohit:backend/models/TraningData.js
export default trainingData;
