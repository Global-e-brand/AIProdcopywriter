import mongoose from "mongoose";

const adminSettings_schema = mongoose.Schema({
  app_basic_plan: {
    type: Number,
  },
  custom_users_plan: {
    type: Array,
  },
  analytic_user_req: {
    type: Array,
    user_requests: {
      user_id: {
        type: String,
        required: true,
      },
      analytic_permission: {
        type: Boolean,
        required: true,
      },
      request_status: {
        type: Boolean,
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
    },
  },
  created_date: {
    type: Date,
  },
  updated_date: {
    type: Date,
  },
  deleted_date: {
    type: Date,
  },
});

const adminSettingModel = mongoose.model("admin_setting", adminSettings_schema);

export default adminSettingModel;
