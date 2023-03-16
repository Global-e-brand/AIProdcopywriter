import mongoose from "mongoose";
import paymentData from "../models/PaymentsData.js";

async function checkTrial(userId) {
  let User = await paymentData.findOne({ userId });
  if (User == undefined || User == null) return false;
  else {
    if (User.IsTrail) {
      let dateOne = User.createdAt;
      let dateTwo = new Date();
      var diffDays = dateTwo.getDate() - dateOne.getDate();
      if (diffDays >= 30) {
        await paymentData.findOneAndUpdate({ userId }, { IsTrail: false });
        return false;
      } else return true;
    } else return false;
  }
}

export default checkTrial;
