import mongoose from "mongoose";

const paymentDataStructure = mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  orderId: {
    type: String,
    require: true,
  },
  payerId: {
    type: String,
    require: true,
  },
  paymentId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  paymentSource: {
    type: String,
    require: false,
  },
  paymentStatus: {
    type: Boolean,
    require: true,
  },
  IsTrail: {
    type: Boolean,
    require: true,
  },
});
const paymentData = mongoose.model("payments", paymentDataStructure);
export default paymentData;
