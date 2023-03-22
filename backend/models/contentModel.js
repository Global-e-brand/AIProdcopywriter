import mongoose, { isObjectIdOrHexString, isValidObjectId } from "mongoose";

const content_creation = mongoose.Schema({
user_id: {
    type: String,
    required : true,
  },
  category:{
    type:String,
    required :true
  },
  question_one: {
    type: String,
    required : true,
  },
  question_two: {
    type: String,
    required : false,
  },
  tone: {
    type: String,
    required : true,
  },
  results:{
    type:Array,
    required :true
  },
  q_repeatation:{
    type:Number,
    required :false

  },
  single_content:{
    type:String,
    required:false
  },
  multiple_content:{
    type:Array,
    required:false
  },
  created_date: {
    type: Date,
    required : true,
  },
  updated_date: {
    type: Date,
    required : false,
  },
  deleted_date: {
    type: Date,
    required : false,
  },
});

const contentModel = mongoose.model("content", content_creation);

export default contentModel;
