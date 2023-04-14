import mongoose from "mongoose";
const subscriber = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  created_date: {
    type: Date,
    required: false,
  },
  userID: {
    type: String,
  },
});

const subscriberModel = mongoose.model("subscribers", subscriber);
export default subscriberModel;
