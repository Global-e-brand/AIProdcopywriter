import mongoose from "mongoose";

const adminSettings_schema = mongoose.Schema({
  app_basic_plan: {
    type: Number,
  },
  custom_users_plan: {
    type: Array,
  },
  analytic_permission: {
    type: Boolean,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  status: {
    type: String, //Acceprted or Declined
    required: true,
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
