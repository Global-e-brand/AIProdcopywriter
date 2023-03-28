import mongoose from "mongoose";

const analytics_schema = mongoose.Schema({
  total_users:{
    type: Double
  },
  subscription: {
    type: Array
  },
  visits: {
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
  }
});

const analyticsModel = mongoose.model("analytics", analytics_schema);

export default analyticsModel;


//Data Structure

// recurring_users=[{
//   User
//   Country
//   Usage
//   activity

// }],


// users=[{
//   prev_sub
//   new_sub
//   rec_sub
// }],

// most_active_by_country=[{
//   User
//   visitors
// }]


