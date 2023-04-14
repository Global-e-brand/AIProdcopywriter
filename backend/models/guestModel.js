import mongoose from "mongoose";

const guest_schema = mongoose.Schema({
  systemID: {
    type: String,
    required: true,
  },
  created_date: {
    type: Date,
    required: true,
  },
  access: {
    type: Boolean,
  },
  isSubscribed: {
    type: Boolean,
  },
  subscriber_email: {
    type: String,
  },
});

const guestModel = mongoose.model("guestlogins", guest_schema);
export default guestModel;
