import userModel from "../models/userModel.js";

export async function getEmail(userID) {
  //   console.log(userID);
  try {
    let user = await userModel.findOne({ _id: userID });
    if (user == null || user == undefined) {
      return false;
    }
    console.log(user);
    return user.email;
  } catch (error) {
    console.log(error);
  }
}
