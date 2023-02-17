import trainingData from "../models/TrainingData.js";

export const getCategoryData = async (category) => {
  let categoryData;

  await trainingData
    .find({ childcategory: category })
    .then(async (data) => {
      categoryData = data;
    })
    .catch((e) =>
      console.log("There was an ERROR fetching the category data: ", e)
    );

  return categoryData;
};
