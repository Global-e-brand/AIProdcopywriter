import mongoose from "mongoose";

const analytics_schema = mongoose.Schema({
  total_users:{
    type: Double
  },
  subscription: {
    type: Array
  },
  active_one_day_users: {
    type: Integer,
  },
  revenue: {
    type: Double,
  },
  total_requests: {
    type: Double,
  },
  request_thismonth: {
    type: Double,
  },
  user_conversion:{
    type:Double
  },
  top_subcategories: {
    type: Array,
  },
  users: {
    type: Array,
  },
  recurring_users: {
    type: Array,
  },
  most_active_by_country:{
    type: Array
  },
  
});

const analyticsModel = mongoose.model("analytics", analytics_schema);

export default analyticsModel;


//Data Structure

// recurring_users=[{
//   Country
//   Usage
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


