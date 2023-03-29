import bodyParser from "body-parser";
import express from "express";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { google } from "googleapis";
import dotenv from "dotenv";
import { activeOneDayUsers, userConversionRate, usersByCountry, usersPieChart } from "../google/usersAnalytics.js";
import { topCategoriesHelper } from "../google/topCategories.js";

dotenv.config();

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let analyticsController = express.Router();

analyticsController.get("/", bodyParser.json(), async (req, res) => {
  // let usersChart = await userReport();
  let topCategories = await topCategoriesHelper();

  let usersPieChartData=await usersPieChart();

  let usersByCountryData= await usersByCountry();

  let userConversionData = await userConversionRate();

  let activeOneDayUsersData =await activeOneDayUsers();

  //db creation

//






  // console.log("usersPieChartData",usersPieChartData);
  // console.log("usersByCountryData",usersByCountryData[0],usersByCountryData[1])
  // console.log("userConversion",userConversionData);
  // console.log("activeOneDayUsersData",activeOneDayUsersData);
})

export default analyticsController;
