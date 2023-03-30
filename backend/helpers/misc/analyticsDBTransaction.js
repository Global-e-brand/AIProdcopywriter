import analyticsModel from "../../models/analytics.model.js";

export async function analyticsCreate(dashboard_data) {
  // console.log("total_users",data[2].usersPieChartData[0].total_users);
  // console.log("activeOneDayUsersData",data[0].activeOneDayUsersData);

  let analyticsData = new analyticsModel();
  dashboard_data.forEach((data) => {
    console.log("data_12", data);
    analyticsData.total_users = data[2].usersPieChartData[0].total_users;
    analyticsData.active_one_day_users = data[0].activeOneDayUsersData;
    analyticsData.user_conversion = data[6].userConversionData;

    analyticsData.request_this_month = null;
    analyticsData.total_requests = null;
    analyticsData.subscription = null;
    analyticsData.revenue = null;
  });

  // let analytics = await analyticsData;

  // //console.log("analytics_11",analytics);
  // analyticsData.save();
}
