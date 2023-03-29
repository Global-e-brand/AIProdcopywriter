import bodyParser from "body-parser";
import express from "express";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { google } from "googleapis";
import dotenv from "dotenv";
import { storeAverageEngagementByCountry } from "../google/storeAverageEngagementByCountry.js";
import { getCountryEngagementReport } from "../google/usersAnalytics.js";
import { getCountryEngagementData } from "../helpers/misc/mongo-db-helpers.js";

dotenv.config();

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let analyticsController = express.Router();

analyticsController.get("/", bodyParser.json(), async (req, res) => {
  let report = await getCountryEngagementReport("30daysAgo", "today");

  await storeAverageEngagementByCountry(report, "30daysAgo", "today");

  console.log("/dashboard");
});

analyticsController.get(
  "/average-session-engagement-per-country",
  async (req, res) => {
    const data = await getCountryEngagementData();

    res.send(data);
  }
);

export default analyticsController;
