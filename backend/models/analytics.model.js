import mongoose from "mongoose";

const analytics_schema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  subscription: {
    type: Integer,
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
  most_recurring_users: {
    type: Array,
  },
  active_users: {
    type: Array,
  },
});

const analyticsModel = mongoose.model("analytics", analytics_schema);

export default analyticsModel;
