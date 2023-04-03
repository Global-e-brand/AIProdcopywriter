import analyticsModel from "../../models/analytics.model.js";

export async function analyticsCreate(data) {
  let activeOneDayUsersData = data[0].activeOneDayUsersData;
  let top_subcategories = data[1].topSubcategories.topCategories;
  let total_users = data[2].usersPieChartData[0].total_users;
  let usersPieChartData = data[2].usersPieChartData;
  let top_five_sessions_country =
    data[3].engagementReport.top_five_sessions_country;
  let top_five_activeUser_country =
    data[3].engagementReport.top_five_activeUser_country;
  let userConversionData = data[4].userConversionData;
  let top_five_users_ByCountry = data[5].usersByCountryData[1].top_five_country;
  let totalResultRequests = data[6].totalResultRequests.request_count;
  let requestsThisMonth = data[7].requestsThisMonth.request_count;

  const response = await analyticsModel.findOne();

  const analyticsData = {
    total_users: total_users,
    active_one_day_users: activeOneDayUsersData,
    user_conversion: userConversionData,
    top_subcategories: top_subcategories,
    users: usersPieChartData,
    top_five_sessions_country: top_five_sessions_country,
    top_five_activeUser_country: top_five_activeUser_country,
    top_five_users_ByCountry: top_five_users_ByCountry,
    total_requests: totalResultRequests,
    request_this_month: requestsThisMonth,
    subscription: null,
    revenue: null,
  };

  if (!response) {
    await analyticsModel.create(analyticsData);
  } else {
    await analyticsModel.updateOne(analyticsData);
  }
}
