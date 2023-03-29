import mongoose from "mongoose";

const analytics_schema = mongoose.Schema({
  total_users: {
    type: Number,
  },
  subscription: {
    type: Array,
  },
  visits: {
    type: Number,
  },
  revenue: {
    type: Number,
  },
  total_requests: {
    type: Number,
  },
  request_thismonth: {
    type: Number,
  },
  top_subcategories: {
    type: Array,
  },
  users: {
    type: Array,
  },
  country_engagement: {
    type: Array,
  },
  most_active_by_country: {
    type: Array,
  },
});

const analyticsModel = mongoose.model("analytics", analytics_schema);

export default analyticsModel;

//Data Structure

// recurring_users=[{
//   User: name & registration date
//   Country: String
//   Usage: percent & range
//   activity: Last login time

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
