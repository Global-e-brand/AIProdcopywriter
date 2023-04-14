import mongoose from "mongoose";

const adminSettings_schema = mongoose.Schema({
  app_basic_plan: {
    type: Number,
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

const adminSettingModel = mongoose.model("setting", adminSettings_schema);

export default adminSettingModel;
