import mongoose from "mongoose";
import bcrypt from "bcrypt";

const socialMediaUser = mongoose.Schema({
  email: {
    type: Array,
    required: false,
  },
  google_id: {
    type: String,
    required: false,
  },
  meta_id: {
    type: String,
    required: false,
  },
  created_date: {
    type: Date,
    required: true,
  },
  updated_date: {
    type: Date,
    required: false,
  },
  deleted_date: {
    type: Date,
    required: false,
  },
});

const socialMediaUserModel = mongoose.model("socialMediaUser", socialMediaUser);
export default socialMediaUserModel;
