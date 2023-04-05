import mongoose from "mongoose";

const user_permission_schema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  role: {
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

const userPermissionModel = mongoose.model(
  "user_permission",
  user_permission_schema
);

export default userPermissionModel;
