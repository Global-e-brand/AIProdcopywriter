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
  let engagementReport = await getCountryEngagementReport(
    "2023-01-01",
    "today"
  );

  await storeAverageEngagementByCountry(
    engagementReport,
    "2023-01-01",
    "today"
  );

  console.log("/dashboard");
});

analyticsController.get("/country_engagement", async (req, res) => {
  const data = await getCountryEngagementData();

  res.send(data);
});

export default analyticsController;
