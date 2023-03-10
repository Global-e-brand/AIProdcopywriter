import trainingData from "../../models/TrainingData.js";
import userModel from "../../models/userModel.js";

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

// This function won't check if the password is hashed, or if the email is
// correct/valid. Those checks should be done beforehand.
export const insertUser = async (email, hashedPassword) => {
  await userModel.create([
    {
      email: email,
      password: hashedPassword,
    },
  ]);
};

export const findUser = async (email) => {
  const user = await userModel.findOne({ email: email });
  return user;
};
