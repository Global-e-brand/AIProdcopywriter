import trainingData from "../../models/TrainingData.js";
import userModel from "../../models/userModel.js";
import analyticsModel from "../../models/analytics.model.js";
// import UserOTPModel from "../../models/userOtpModel.js";
import UserOTPModel from "../../models/userOTPModel.js";

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
  await userModel.create({
    email: email,
    password: hashedPassword,
  });
};

export const findUser = async (email) => {
  const user = await userModel.findOne({ email: email });
  // console.log("user-----33", user);
  return user;
};

export const insertOTP = async (email, hashedOTP, expiryTime) => {
  await UserOTPModel.create({
    email: email,
    hashedOTP: hashedOTP,
    createdAt: Date.now(),
    expiresAt: Date.now() + expiryTime,
  });
};

export const findOTP = async (email) => {
  const otp = await UserOTPModel.findOne({ email: email });
  return otp;
};

// this function will not check if a user has an OTP in the DB
export const deleteOTP = async (email) => {
  await UserOTPModel.deleteMany({ email: email });
};

export const updateUserPassword = async (
  email,
  password,
  confirmedPassword
) => {
  await userModel.updateOne(
    { email: email },
    {
      password: password,
      confirm_password: confirmedPassword,
    }
  );
};
