import mongoose, { isObjectIdOrHexString } from "mongoose";

const content_creation = mongoose.Schema({
user_id: {
    type: isObjectIdOrHexString,
    require: true,
  },
  question_one: {
    type: String,
    require: true,
  },
  question_two: {
    type: String,
    require: true,
  },
  tone: {
    type: String,
    require: true,
  },
  results:{
    type:Array,
    require:true
  },
  q_repeatation:{
    type:Int16Array,
    require:false

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

const contentModel = mongoose.model("user", content_creation);
export default contentModel;
