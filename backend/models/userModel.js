import mongoose from "mongoose";
import bcrypt from "bcrypt";

const user_creation = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  confirm_password: {
    type: String,
    require: true,
  },
  created_date: {
    type: Date,
    require: true,
  },
  updated_date: {
    type: Date,
    require: false,
  },
  deleted_date: {
    type: Date,
    require: false,
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
