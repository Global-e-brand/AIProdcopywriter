import bodyParser from "body-parser";
import express from "express";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { google } from "googleapis";
import dotenv from "dotenv";
import {
  activeOneDayUsers,
  userConversionRate,
  usersByCountry,
  usersPieChart,
  getCountryBySession_ActiveUser,
  getTopSubcategories,
  getResultRequests,
} from "../google/usersAnalytics.js";
import { analyticsCreate } from "../helpers/misc/analyticsDBTransaction.js";

dotenv.config();

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

let analyticsController = express.Router();

analyticsController.use(bodyParser.urlencoded({ extended: false }));

analyticsController.use(bodyParser.json());

analyticsController.get("/", bodyParser.json(), async (req, res) => {
  try {
    console.log("dshboard");
    let activeOneDayUsersData = await activeOneDayUsers();
    let topSubcategories = await getTopSubcategories();
    let usersPieChartData = await usersPieChart();
    let engagementReport = await getCountryBySession_ActiveUser();
    let userConversionData = await userConversionRate();
    let usersByCountryData = await usersByCountry();
    let totalResultRequests = await getResultRequests("2023-01-01", "today");
    let requestsThisMonth = await getResultRequests("30daysAgo", "today");
    let dashboardData = [
      { activeOneDayUsersData: activeOneDayUsersData },
      { topSubcategories: topSubcategories },
      { usersPieChartData: usersPieChartData },
      { engagementReport: engagementReport },
      { userConversionData: userConversionData },
      { usersByCountryData: usersByCountryData },
      { totalResultRequests: totalResultRequests },
      { requestsThisMonth: requestsThisMonth },
    ];
    //DB Start
    await analyticsCreate(dashboardData);
    //DB End
    res.send(dashboardData);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
export default analyticsController;
