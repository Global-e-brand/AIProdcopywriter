import mongoose from "mongoose";

const analytics_schema = mongoose.Schema({
  total_users: {
    type: Number,
  },
  subscription: {
    type: Array,
  },
  active_one_day_users: {
    type: Number,
  },
  revenue: {
    type: Number,
  },
  total_requests: {
    type: Number,
  },
  request_this_month: {
    type: Number,
  },
  user_conversion: {
    type:Number
  },
  top_subcategories: {
    type: Array,
  },
  users: {
    type: Array,
  },
  top_five_sessions_country: {
    type: Array,
  },
  top_five_activeUser_country: {
    type: Array,
  },
  top_five_users_ByCountry:{
    type: Array,
  }
  
});

const analyticsModel = mongoose.model("analytics", analytics_schema);

export default analyticsModel;

//Data Structure

// recurring_users=[{
//   Country: String
//   Usage: percent & range
// }],

// users=[{
//   totalusers
//   new users
// }],

// most_active_by_country=[{
//   User
//   visitors
// }]

//top_subcategories=[{
// categoryname
// count
//}]
