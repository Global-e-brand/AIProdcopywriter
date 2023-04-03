import analyticsModel from "../../models/analytics.model.js";

export async function analyticsCreate(data) {
  let activeOneDayUsersData = data[0].activeOneDayUsersData;
  let top_subcategories = data[1].topSubcategories.topCategories;
  let total_users = data[2].usersPieChartData[0].total_users;
  let usersPieChartData = data[2].usersPieChartData;
  let top_five_sessions_country = data[3].engagementReport.top_five_sessions_country;
  let top_five_activeUser_country = data[3].engagementReport.top_five_activeUser_country;
  let userConversionData = data[4].userConversionData;
  let top_five_users_ByCountry = data[5].usersByCountryData[1].top_five_country;

  let analyticsData = new analyticsModel();

  analyticsData.total_users = total_users;
  analyticsData.active_one_day_users = activeOneDayUsersData;
  analyticsData.user_conversion = userConversionData;
  analyticsData.top_subcategories = top_subcategories;
  analyticsData.users = usersPieChartData;
  analyticsData.top_five_sessions_country = top_five_sessions_country;
  analyticsData.top_five_activeUser_country = top_five_activeUser_country;
  analyticsData.top_five_users_ByCountry = top_five_users_ByCountry;
  analyticsData.request_this_month = null;
  analyticsData.total_requests = null;
  analyticsData.subscription = null;
  analyticsData.revenue = null;

  let analytics = await analyticsData;

  // console.log("analytics_11", analytics);
  // analyticsData.save();
}
