import mongoose from "mongoose";
import bcrypt from "bcrypt";

const user_creation = mongoose.Schema({
  user_id: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  google_id: {
    type: String,
    required: false,
  },
  meta_id: {
    type: String,
    required: false,
  },
  role:{
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  confirm_password: {
    type: String,
    required: true,
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

user_creation.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    this.confirm_password = await bcrypt.hash(this.confirm_password, 10);
  }
  next();
});

const userModel = mongoose.model("user", user_creation);
export default userModel;
