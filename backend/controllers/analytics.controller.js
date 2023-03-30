import bodyParser from "body-parser";
import express from "express";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { google } from "googleapis";
import dotenv from "dotenv";
import { activeOneDayUsers, userConversionRate, usersByCountry, usersPieChart } from "../google/usersAnalytics.js";
import { topCategoriesHelper } from "../google/topCategories.js";
import { storeAverageEngagementByCountry } from "../google/storeAverageEngagementByCountry.js";
import { getCountryEngagementReport } from "../google/usersAnalytics.js";
import { getCountryEngagementData } from "../helpers/misc/mongo-db-helpers.js";

dotenv.config();

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let analyticsController = express.Router();

analyticsController.get("/", bodyParser.json(), async (req, res) => {
  let engagementReport = await getCountryEngagementReport();

  let topCategories = await topCategoriesHelper();

  let usersPieChartData=await usersPieChart();

  let usersByCountryData= await usersByCountry();

  let userConversionData = await userConversionRate();

  let activeOneDayUsersData =await activeOneDayUsers();
  
  await storeAverageEngagementByCountry(
    engagementReport,
    "2023-01-01",
    "today"
  );

  console.log("/dashboard");


analyticsController.get("/country_engagement", async (req, res) => {
  const data = await getCountryEngagementData();

  res.send(data);
});


  // console.log("usersPieChartData",usersPieChartData);
  // console.log("usersByCountryData",usersByCountryData[0],usersByCountryData[1])
  // console.log("userConversion",userConversionData);
  // console.log("activeOneDayUsersData",activeOneDayUsersData);
});

export default analyticsController;
