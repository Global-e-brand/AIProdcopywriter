import mongoose from "mongoose";

const user_otp = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  hashedOTP: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

const UserOTPModel = mongoose.model("verify_email", user_otp);
export default UserOTPModel;
